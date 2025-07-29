import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Define the interface for the image directly
interface EventImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
  formats: any; // Or define a more specific interface for formats
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string; // The URL is directly here
  previewUrl: string | null;
  provider: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  provider_metadata: any | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

// Define the main Event interface
interface Event {
  id: number;
  documentId: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
  recurring: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image?: EventImage; // The image object is directly of type EventImage, and optional
}

// Define the props interface for EventsPageClient
interface EventsPageClientProps {
  data: Event[]; // Expect an array of Event objects
}

export default function EventsPageClient({ data }: EventsPageClientProps) {
  const events = data;

  const upcomingEvents = events.filter((event) => !event.recurring);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/church hall 4.jpg"
            alt="Events"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Events & Calendar
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Stay connected with what&pos;s happening at BFEM church
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-12">
        <div className="container px-4">
          {/* View Options */}
          <Tabs defaultValue="recurring" className="mb-8">
            <div className="flex justify-between items-center flex-wrap gap-4">
              <h2 className="text-2xl font-bold">Church Events</h2>
              <TabsList>
                <TabsTrigger value="recurring">Recurring</TabsTrigger>
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                {/* Uncomment the line below if you re-enable the calendar tab functionality */}
                {/* <TabsTrigger value="calendar">Calendar</TabsTrigger> */}
              </TabsList>
            </div>

            {/* Upcoming Events */}
            <TabsContent value="upcoming" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingEvents.length < 1 ? (
                  <div>No upcoming events at the moment</div>
                ) : (
                  upcomingEvents.map((event) => (
                    <Card key={event.id}>
                      <div className="relative aspect-video">
                        <Image
                          // Correctly access image URL and prepend base URL
                          src={
                            event.image
                              ? `${
                                  process.env.NEXT_PUBLIC_STRAPI_API_URL || ""
                                }${event.image.url}`
                              : "/placeholder.svg"
                          }
                          // Use alternative text or fallback to title
                          alt={event.image?.alternativeText || event.title}
                          fill
                          className="object-cover rounded-t-lg"
                        />
                        <div className="absolute top-2 left-2">
                          <Badge>{event.category}</Badge>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle>{event.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="flex items-center">
                          <CalendarDays className="h-5 w-5 mr-2 text-muted-foreground" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-5 w-5 mr-2 text-muted-foreground" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-5 w-5 mr-2 text-muted-foreground" />
                          <span>{event.location}</span>
                        </div>
                        <p className="pt-2 line-clamp-3">{event.description}</p>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
            </TabsContent>

            {/* Recurring Events */}
            <TabsContent value="recurring" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events
                  .filter((event) => event.recurring)
                  .map((event) => (
                    <Card key={event.id}>
                      <div className="relative aspect-video">
                        <Image
                          // Correctly access image URL and prepend base URL
                          src={
                            event.image
                              ? `${
                                  process.env.NEXT_PUBLIC_STRAPI_API_URL || ""
                                }${event.image.url}`
                              : "/placeholder.svg"
                          }
                          // Use alternative text or fallback to title
                          alt={event.image?.alternativeText || event.title}
                          fill
                          className="object-cover rounded-t-lg"
                        />
                        <div className="absolute top-2 left-2">
                          <Badge>{event.category}</Badge>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle>{event.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="flex items-center">
                          <CalendarDays className="h-5 w-5 mr-2 text-muted-foreground" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-5 w-5 mr-2 text-muted-foreground" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-5 w-5 mr-2 text-muted-foreground" />
                          <span>{event.location}</span>
                        </div>
                        <p className="pt-2 line-clamp-3">{event.description}</p>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            {/* Calendar View */}
            <TabsContent value="calendar" className="mt-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>June 2025</CardTitle>
                    <div className="flex gap-1">
                      <Button variant="outline" size="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <path d="m15 18-6-6 6-6" />
                        </svg>
                      </Button>
                      <Button variant="outline" size="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-7 gap-1">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                      (day) => (
                        <div key={day} className="text-center font-medium py-2">
                          {day}
                        </div>
                      )
                    )}
                    {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => {
                      const hasEvent = [1, 3, 10, 15, 20, 27].includes(day);
                      return (
                        <div
                          key={day}
                          className={`aspect-square border rounded-md flex flex-col items-center justify-start p-1 ${
                            hasEvent ? "bg-primary/10" : ""
                          }`}
                        >
                          <span className="text-sm">{day}</span>
                          {hasEvent && (
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1"></div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Events This Month</h3>
                <div className="space-y-4">
                  {events.slice(0, 3).map((event) => (
                    <Card key={event.id}>
                      <div className="flex flex-col sm:flex-row">
                        {/* Added conditional rendering for image in this section */}
                        {event.image && (
                          <div className="relative w-full sm:w-1/3 h-32 sm:h-auto overflow-hidden rounded-t-md sm:rounded-l-md sm:rounded-t-none">
                            <Image
                              src={`${
                                process.env.NEXT_PUBLIC_STRAPI_API_URL || ""
                              }${event.image.url}`}
                              alt={event.image.alternativeText || event.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        <div className="p-4 sm:p-6 flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge>{event.category}</Badge>
                            <span className="text-sm text-muted-foreground">
                              {event.date}
                            </span>
                          </div>
                          <h4 className="text-lg font-bold mb-2">
                            {event.title}
                          </h4>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                          <Link href={`/events/${event.id}`}>
                            <Button variant="outline" size="sm">
                              Event Details
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Add to Calendar */}
      {/* <section className="bg-muted py-12">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-6">
              Add our church calendar to your personal calendar to never miss an event.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 mr-2"
                >
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                </svg>
                Google Calendar
              </Button>
              <Button variant="outline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 mr-2"
                >
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                </svg>
                Apple Calendar
              </Button>
              <Button variant="outline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 mr-2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
                Download iCal
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Submit Event */}
      {/* <section className="py-12">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Have an Event to Share?</h2>
            <p className="text-muted-foreground mb-6">
              If you have a ministry event or community gathering you'd like to promote, let us know!
            </p>
            <Link href="/contact">
              <Button size="lg">Submit Event</Button>
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  );
}
