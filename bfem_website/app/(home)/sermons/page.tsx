import SermonsPageClient from '@/components/sermons-client';
import { SermonData } from '@/types/sermon'; // Use the revised types
import { Loader2 } from 'lucide-react';

export const dynamic = 'force-dynamic';

async function getSermons(): Promise<SermonData[]> {
  const apiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;

  if (!apiUrl) {
    console.error("NEXT_PUBLIC_STRAPI_API_URL is not defined.");
    return [];
  }



  // Ensure ?populate=* is present here!
  const res = await fetch(`${apiUrl}/api/sermons?populate=*`, {
    cache: 'no-store'
  })



  if (!res.ok) {
    console.error(`Failed to fetch sermons: ${res.statusText}`);
    return [];
  }

  const response = await res.json();  
  console.log("This is the raw response: ", response);
  return response.data; // This 'data' array already contains the flat sermon objects
}

const SermonsPage = async () => {
  const sermons = await getSermons();
  // This log will now show the correct flat structure

  // Sort sermons by date, newest first
  const sortedSermons = sermons.sort((a, b) => {
    // Access date directly on 'a' and 'b' (no 'attributes' needed)
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  if (!sortedSermons || sortedSermons.length === 0) { // Check if empty or null
    return (
      <div className="flex items-center justify-center min-h-[50vh] text-lg text-gray-500">
        <Loader2 className="animate-spin mr-2" />
        Sermons are loading or no sermons available...
      </div>
    );
  }

  return (
    <div>
      <SermonsPageClient data={sortedSermons} />
    </div>
  );
};

export default SermonsPage;