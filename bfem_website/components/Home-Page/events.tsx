import { getStrapiEventsData } from "@/actions/getStrapiEvents";
import React from "react";
import { Event } from "@/types/events";

const Events = async () => {
  const res = await getStrapiEventsData("/api/events");
  const events = res.data as Event[];
  const upcomingEvents = events.filter((event) => event.recurring);
  return (
    <div className="mt-[20px]">
      <h2 className="text-primary text-[25px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Our Events
      </h2>
      <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex items-stretch p-4 gap-3">
          {upcomingEvents.map((event) => (
            <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60" key={event.documentId}>
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
                style={{
                  backgroundImage:
                    `url(${event.image?.url || "/default-image.jpg"})`,
                }}
              ></div>
              <div>
                <p className="text-[#171412] text-base font-medium leading-normal">
                  {event.title}
                </p>
                <p className="text-[#827468] text-sm font-normal leading-normal">
                  {event.time} - {event.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
