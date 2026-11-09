
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseSecret = process.env.SUPABASE_SECRET_KEY;

  if (!supabaseUrl || !supabaseSecret) {
    return res.status(500).json({
      error: "Server configuration is incomplete"
    });
  }

  const { event_type, project_id } = req.body || {};

  const allowedEvents = ["project_view", "cv_download"];

  if (!allowedEvents.includes(event_type)) {
    return res.status(400).json({
      error: "Invalid event type"
    });
  }

  if (
    event_type === "project_view" &&
    (typeof project_id !== "string" || project_id.length > 100)
  ) {
    return res.status(400).json({
      error: "Invalid project ID"
    });
  }

  try {
    const response = await fetch(
      `${supabaseUrl}/rest/v1/portfolio_events`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": supabaseSecret,
          "Prefer": "return=minimal"
        },
        body: JSON.stringify({
          event_type,
          project_id: event_type === "project_view"
            ? project_id
            : null
        })
      }
    );

    if (!response.ok) {
      const error = await response.text();
      console.error("Supabase error:", error);

      return res.status(502).json({
        error: "Could not save analytics event"
      });
    }

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error("Analytics error:", error);

    return res.status(500).json({
      error: "Internal server error"
    });
  }
}
