"use server"

export const fetchStrapiImages = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
  const strapiApiEndpoint = "/api/gallery-images?populate=image"
  
  try {
    const response = await fetch(`${baseUrl}${strapiApiEndpoint}`, {
      next: { 
        tags: ['gallery', 'all'], // For webhook-based revalidation
        revalidate: 60   // Fresh CMS content within a minute
      }
    })
    
    const data = await response.json();
    console.log("This is the data returned from the strapi gallery: ", data)
    return data;
    
  } catch (error) {
    console.error("Error fetching gallery images from strapi", error);
  }
}