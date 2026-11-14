
export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  const token = process.env.VERCEL_ACCESS_TOKEN;
  const projectId = process.env.VERCEL_PROJECT_ID;

  if (!token || !projectId) {
    return res.status(500).json({
      error: "Analytics configuration is incomplete"
    });
  }

  try {
    const today = new Date();
    const until = today.toISOString().slice(0, 10);

    const start = new Date(today);
    start.setUTCDate(start.getUTCDate() - 29);
    const since = start.toISOString().slice(0, 10);

    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    };

    const countUrl = new URL(
      "https://api.vercel.com/v1/query/web-analytics/visits/count"
    );

    countUrl.searchParams.set("projectId", projectId);
    countUrl.searchParams.set("since", since);
    countUrl.searchParams.set("until", until);

    const deviceUrl = new URL(
      "https://api.vercel.com/v1/query/web-analytics/visits/aggregate"
    );

    deviceUrl.searchParams.set("projectId", projectId);
    deviceUrl.searchParams.set("since", since);
    deviceUrl.searchParams.set("until", until);
    deviceUrl.searchParams.set("by", "deviceType");
    deviceUrl.searchParams.set("limit", "10");

    const [countResponse, deviceResponse] = await Promise.all([
      fetch(countUrl, { headers }),
      fetch(deviceUrl, { headers })
    ]);

    if (!countResponse.ok || !deviceResponse.ok) {
      const details = await Promise.all([
        countResponse.text(),
        deviceResponse.text()
      ]);

      console.error("Vercel Analytics API error:", details);

      return res.status(502).json({
        error: "Could not retrieve Vercel analytics"
      });
    }

    const countResult = await countResponse.json();
    const deviceResult = await deviceResponse.json();

    const counts = countResult.data || {};

    const deviceRows = Array.isArray(deviceResult.data)
      ? deviceResult.data
      : [];

    const devices = {
      mobile: 0,
      desktop: 0,
      tablet: 0
    };

    for (const row of deviceRows) {
      const type = String(row.deviceType || "").toLowerCase();

      if (type in devices) {
        devices[type] += Number(row.visitors || 0);
      }
    }
    
    res.setHeader(
      "Cache-Control",
      "no-store, no-cache, must-revalidate"
    );

    return res.status(200).json({
      visitors: Number(counts.visitors || 0),
      pageViews: Number(counts.pageviews || 0),
      devices,
      period: {
        since,
        until
      }
    });

  } catch (error) {
    console.error("Analytics error:", error);

    return res.status(500).json({
      error: "Internal server error"
    });
  }
}
