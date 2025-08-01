import { getStrapiEventsData } from '@/actions/getStrapiEvents'
import EventsPageClient from '@/components/events/event-page-client'
import React from 'react'

export const dynamic = 'force-dynamic';

const EventsPage =  async () => {
  const res = await getStrapiEventsData("/api/events");
  console.log("This is the response from strapi events: ", res.data);

  const eventsData = res.data;
  return (
    <div>
      <EventsPageClient data={eventsData}/>
    </div>
  )
}

export default EventsPage