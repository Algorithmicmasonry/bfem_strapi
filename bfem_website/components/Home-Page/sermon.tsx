"use client";

import { SermonData } from "@/types/sermon";
import { Loader2 } from "lucide-react";
import Link from "next/link";

interface SermonProps {
  sermon?: SermonData; // Optional to handle cases where no sermon is available
}

const Sermon = ({ sermon }: SermonProps) => {
  const strapiBaseUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL || "";

  // If no sermon data, show loading or empty state
  if (!sermon) {
    return (
      <div className="my-[20px]">
        <h2 className="text-[#171412] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Latest Sermons
        </h2>
        <div className="p-4">
          <div className="flex items-center justify-center min-h-[150px] text-lg text-gray-500">
            <Loader2 className="animate-spin mr-2" />
            No sermons available...
          </div>
        </div>
      </div>
    );
  }

  // Construct image URL
  const imageUrl = sermon.coverImage
    ? `${strapiBaseUrl}${sermon.coverImage.url}`
    : "/placeholder.svg";

  // Construct link to sermon page or YouTube video
  const sermonLink = sermon.videoId
    ? `https://www.youtube.com/watch?v=${sermon.videoId}`
    : `/sermons`;

  return (
    <div className="my-[20px]">
      <h2 className="text-[#171412] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Latest Sermons
      </h2>
      <div className="p-4">
        <div className="flex items-stretch justify-between gap-4 rounded-xl">
          <div className="flex flex-col gap-1 flex-[2_2_0px]">
            <p className="text-[#827468] text-sm font-normal leading-normal">
              {sermon.series || "Sermon Series"}
            </p>
            <p className="text-[#171412] text-base font-bold leading-tight">
              {sermon.title}
            </p>
            <p className="text-[#827468] text-sm font-normal leading-normal">
              {sermon.Speaker} explores {sermon.description || "this topic"}.
            </p>
            <Link href={sermonLink} className="mt-2 inline-block">
              <button className="bg-[#007bff] text-white text-sm font-medium py-2 px-4 rounded hover:bg-[#0056b3]">
                {sermon.videoId ? "Watch Now" : "View Details"}
              </button>
            </Link>
          </div>
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
            style={{ backgroundImage: `url("${imageUrl}")` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Sermon;