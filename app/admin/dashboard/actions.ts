// app/admin/actions.ts
"use server";

export async function fetchInsightById(short_id: string) {
  const res = await fetch(
    `https://eu.posthog.com/api/projects/59761/insights/${short_id}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.POSTHOG_API_KEY}`,
      },
      next: { revalidate: 600 },
      cache: "force-cache",
    }
  );

  const data = await res.json();
  return data || [];
}

/*pageview count - gkPBxLH9
 weekly active users - 46gcpB6C
 monthly active users -wZjb49dJ
Growth - n12eC8mc
*/
