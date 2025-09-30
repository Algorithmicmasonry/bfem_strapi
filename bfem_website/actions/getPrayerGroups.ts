export async function getPrayerGroups() {
  const apiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;

  if (!apiUrl) {
    console.error("NEXT_PUBLIC_STRAPI_API_URL is not defined.");
    return [];
  }

  try {
    const res = await fetch(`${apiUrl}/api/prayer-groups?populate=*`, {
      next: { 
        tags: ['prayergroups'], // For webhook-based revalidation
        revalidate: 86400   // Cache for 24 hours (as backup)
      }
    });

    if (!res.ok) {
      console.error(`Failed to fetch prayer groups: ${res.statusText}`);
      return [];
    }

    const response = await res.json();
    return response.data; // Returns the prayer group objects
  } catch (error) {
    console.error("Error fetching prayer groups:", error);
    return [];
  }
}

export async function getConventions() {
  const apiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;

  if (!apiUrl) {
    console.error("NEXT_PUBLIC_STRAPI_API_URL is not defined.");
    return [];
  }

  try {
    const res = await fetch(`${apiUrl}/api/conventions?populate=*`, {
      next: { 
        tags: ['conventions', 'all'], // For webhook-based revalidation
        revalidate: 86400   // Cache for 24 hours (as backup)
      }
    });

    if (!res.ok) {
      console.error(`Failed to fetch conventions: ${res.statusText}`);
      return [];
    }

    const response = await res.json();
    return response.data; // Returns the convention objects
  } catch (error) {
    console.error("Error fetching conventions:", error);
    return [];
  }

}