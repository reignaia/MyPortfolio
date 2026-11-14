
export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseSecret = process.env.SUPABASE_SECRET_KEY;

  if (!supabaseUrl || !supabaseSecret) {
    return res.status(500).json({
      error: "Supabase configuration is incomplete"
    });
  }

  try {
    const url = new URL(
      `${supabaseUrl}/rest/v1/portfolio_events`
    );

    url.searchParams.set("select", "event_type,project_id");
    url.searchParams.set("limit", "10000");

    const response = await fetch(url, {
      headers: {
        apikey: supabaseSecret,
        Authorization: `Bearer ${supabaseSecret}`
      }
    });

    if (!response.ok) {
      console.error("Supabase analytics error:", await response.text());

      return res.status(502).json({
        error: "Could not retrieve portfolio events"
      });
    }

    const events = await response.json();

    const projectViews = {};

    let cvDownloads = 0;
    let totalProjectViews = 0;

    for (const event of events) {
      if (event.event_type === "cv_download") {
        cvDownloads++;
      }

      if (event.event_type === "project_view") {
        totalProjectViews++;

        const id = event.project_id || "unknown";
        projectViews[id] = (projectViews[id] || 0) + 1;
      }
    }

    const popularProjects = Object.entries(projectViews)
      .map(([projectId, views]) => ({
        projectId,
        views
      }))
      .sort((a, b) => b.views - a.views);

    res.setHeader(
      "Cache-Control",
      "s-maxage=300, stale-while-revalidate=600"
    );

    return res.status(200).json({
      totalProjectViews,
      cvDownloads,
      popularProjects
    });

  } catch (error) {
    console.error("Portfolio events error:", error);

    return res.status(500).json({
      error: "Internal server error"
    });
  }
}
