import { getStrapiHomePageData } from "@/actions/getHomePageData";
import {
  AboutUs,
  Branches,
  Events,
  HeroSection,
  MinistriesGroups,
  PastorAbout,
  Sermon
} from "@/components/Home-Page";

export default async function HomePage() {

  const res = await getStrapiHomePageData("/api/home-page");
  const strapiData = res.data;
 
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center py-5 px-[20px]">
          <div className="flex flex-col w-full max-w-[1200px] flex-1" id="home">
            <HeroSection title={strapiData.Title} motto={strapiData.Motto} />
            <AboutUs />
            <PastorAbout />
            <Events />
            <Sermon />
            <MinistriesGroups />
            <Branches />
          </div>
        </div>
      </div>
    </div>
  );
}
