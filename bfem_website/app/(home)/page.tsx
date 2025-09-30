import { getStrapiHomePageData } from "@/actions/getHomePageData";
import { getPrayerGroups } from "@/actions/getPrayerGroups";
import {
  AboutUs,
  Branches,
  Events,
  HeroSection,
  MinistriesGroups,
  PastorAbout,
  Sermon,
} from "@/components/Home-Page";
import { SermonData } from "@/types/sermon";

export const dynamic = "force-dynamic";

// Reuse the getSermons function from SermonsPage

async function getSermons(): Promise<SermonData[]> {
  const apiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;

  if (!apiUrl) {
    console.error("NEXT_PUBLIC_STRAPI_API_URL is not defined.");
    return [];
  }

  const res = await fetch(`${apiUrl}/api/sermons?populate=*`, {
      next: { 
        tags: ['events', 'all'], // For webhook-based revalidation
        revalidate: 86400   // Cache for 24 hours (as backup)
      }
    });

  if (!res.ok) {
    console.error(`Failed to fetch sermons: ${res.statusText}`);
    return [];
  }

  const response = await res.json();
  return response.data; // Returns the flat sermon objects
}

export default async function HomePage() {
  // Fetch homepage data
  const res = await getStrapiHomePageData("/api/home-page");
  const strapiData = res.data;

  // fetch prayer groups
  const prayerGroups = await getPrayerGroups();
  console.log("Prayer Groups: ", prayerGroups);

  // Fetch sermons and get the latest one
  const sermons = await getSermons();
  const sortedSermons = sermons.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime(); // Newest first
  });
  const latestSermon = sortedSermons[0]; // Get the most recent sermon

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center py-5 px-[20px]">
          <div className="flex flex-col w-full max-w-[1200px] flex-1" id="home">
            <HeroSection title={strapiData.Title} motto={strapiData.Motto} />
            <AboutUs />
            <PastorAbout />
            <Events />
            <Sermon sermon={latestSermon} /> {/* Pass the latest sermon */}
            <MinistriesGroups />
            <Branches />
          </div>
        </div>
      </div>
    </div>
  );
}
