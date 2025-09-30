"use server"

export async function getStrapiEventsData (url: string) {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
  try {
    const response = await fetch(`${baseUrl}${url}?populate=image`, {
      next: { 
        tags: ['events', 'all'], // For webhook-based revalidation
        revalidate: 86400   // Cache for 24 hours (as backup)
      }
    });
     const data = await response.json();
     return data;

  } catch (error) {
    console.error(error);
  }

}