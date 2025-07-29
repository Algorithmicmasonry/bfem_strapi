"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CalendarDays,
  Clock,
  Download,
  Headphones,
  Search,
  Users,
  PlayCircle,
} from "lucide-react";
import { SermonData } from "@/types/sermon"; // Import the revised SermonData interface

interface SermonsPageClientProps {
  data: SermonData[];
}

function SermonCard({ sermon }: { sermon: SermonData }) {
  const strapiBaseUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL || "";

  // Access fields directly on sermon object, not through attributes or data wrappers
  const imageUrl = sermon.coverImage
    ? `${strapiBaseUrl}${sermon.coverImage.url}`
    : "/placeholder.svg"; // Fallback image

  const audioUrl = sermon.audioFile
    ? `${strapiBaseUrl}${sermon.audioFile.url}`
    : null;

  const documentUrl = sermon.documentFile
    ? `${strapiBaseUrl}${sermon.documentFile.url}`
    : null;

  const videoId = sermon.videoId;
  const watchNowLink = videoId
    ? `https://www.youtube.com/watch?v=${videoId}`
    : `/sermons/${sermon.id}`; // Correct YouTube URL

  return (
    <Card key={sermon.id}>
      <div className="relative aspect-video">
        <Image
          src={imageUrl}
          alt={sermon.coverImage?.alternativeText || sermon.title} // Access directly
          fill
          className="object-cover rounded-t-lg"
        />
        <div className="absolute top-2 left-2">
          <Badge>{sermon.series}</Badge> {/* Access directly */}
        </div>
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-2">{sermon.title}</CardTitle>{" "}
        {/* Access directly */}
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>{sermon.Speaker}</span>{" "}
            {/* Access Speaker with capital 'S' */}
          </div>
          <div className="flex items-center">
            <CalendarDays className="h-4 w-4 mr-1" />
            <span>
              {new Date(sermon.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>{" "}
            {/* Access directly */}
          </div>
        </div>
        <p className="line-clamp-3 text-muted-foreground">
          {sermon.description} {/* Access directly */}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href={watchNowLink}>
          <Button variant="outline" size="sm">
            {videoId ? "Watch Now" : "Details"}
          </Button>
        </Link>
        <div className="flex gap-2">
          {audioUrl && (
            <a href={audioUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Headphones className="h-4 w-4" />
              </Button>
            </a>
          )}
          {documentUrl && (
            <a href={documentUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Download className="h-4 w-4" />
              </Button>
            </a>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}

function SermonListItem({ sermon }: { sermon: SermonData }) {
  const strapiBaseUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL || "";

  const imageUrl = sermon.coverImage
    ? `${strapiBaseUrl}${sermon.coverImage.url}`
    : "/placeholder.svg";

  const audioUrl = sermon.audioFile
    ? `${strapiBaseUrl}${sermon.audioFile.url}`
    : null;

  const documentUrl = sermon.documentFile
    ? `${strapiBaseUrl}${sermon.documentFile.url}`
    : null;

  const videoId = sermon.videoId;
  const watchNowLink = videoId
    ? `https://www.youtube.com/watch?v=${videoId}`
    : `/sermons/${sermon.id}`; // Correct YouTube URL

  return (
    <Card key={sermon.id}>
      <div className="flex flex-col md:flex-row">
        <div className="relative w-full md:w-[200px] aspect-video md:aspect-[4/3]">
          <Image
            src={imageUrl}
            alt={sermon.coverImage?.alternativeText || sermon.title}
            fill
            className="object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
          />
        </div>
        <div className="flex-1 p-6">
          <div className="flex flex-wrap gap-2 mb-2">
            <Badge>{sermon.series}</Badge>
            <Badge variant="outline">{sermon.scripture}</Badge>
          </div>
          <h3 className="text-xl font-bold mb-2">{sermon.title}</h3>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              <span>{sermon.Speaker}</span>{" "}
              {/* Access Speaker with capital 'S' */}
            </div>
            <div className="flex items-center">
              <CalendarDays className="h-4 w-4 mr-1" />
              <span>
                {new Date(sermon.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            {sermon.duration && (
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{sermon.duration}</span>
              </div>
            )}
          </div>
          <p className="text-muted-foreground mb-4">{sermon.description}</p>
          <div className="flex flex-wrap gap-3">
            <Link href={watchNowLink}>
              <Button>
                {videoId ? (
                  <>
                    <PlayCircle className="h-4 w-4 mr-2" /> Watch Now
                  </>
                ) : (
                  "Details"
                )}
              </Button>
            </Link>
            {audioUrl && (
              <a href={audioUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline">
                  <Headphones className="h-4 w-4 mr-2" /> Listen
                </Button>
              </a>
            )}
            {documentUrl && (
              <a href={documentUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" /> Download Notes
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}

export default function SermonsPageClient({
  data: sermons,
}: SermonsPageClientProps) {
  console.log("Sermons data received in client:", sermons); // For debugging

  // Use optional chaining and filter Boolean for robustness
  const uniqueSeries = Array.from(
    new Set(
      sermons
        .map((s) => s.series) // Access directly
        .filter(Boolean)
    )
  );

  const uniqueSpeakers = Array.from(
    new Set(
      sermons
        .map((s) => s.Speaker) // Access Speaker directly (capital S)
        .filter(Boolean)
    )
  );

  // components/sermons-client.tsx

  // ... (other uniqueX calculations)

  const uniqueYears = Array.from(
    new Set(
      sermons
        .map((s) => (s.date ? new Date(s.date).getFullYear().toString() : null))
        .filter(Boolean)
    )
  ).sort((a, b) => parseInt(b || "0") - parseInt(a || "0")) as string[]; // <-- Add 'as string[]' here!

  return (
    <div className="flex flex-col min-h-screen">
      {/* ... Hero Section ... */}
      <section className="relative h-[250px] flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/pastor olanusi eleven.jpg"
            alt="Sermon Library Background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Sermon Library
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore our collection of messages to grow in your faith journey
          </p>
        </div>
      </section>

      {/* Sermon Library */}
      <section className="py-12">
        <div className="container px-4">
          {/* Search and Filter */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search sermons..." className="pl-10" />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Select>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Series" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Series</SelectItem>
                    {uniqueSeries.map((series) => (
                      <SelectItem
                        key={series}
                        value={series.toLowerCase().replace(/\s/g, "-")}
                      >
                        {series}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Speaker" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Speakers</SelectItem>
                    {uniqueSpeakers.map((speaker) => (
                      <SelectItem
                        key={speaker}
                        value={speaker.toLowerCase().replace(/\s/g, "-")}
                      >
                        {speaker}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Date" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                    {uniqueYears.map((year) => (
                      <SelectItem key={year} value={year}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* View Options */}
          <Tabs defaultValue="grid" className="mb-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">All Sermons</h2>
              <TabsList>
                <TabsTrigger value="grid">Grid</TabsTrigger>
                <TabsTrigger value="list">List</TabsTrigger>
              </TabsList>
            </div>

            {/* Grid View */}
            <TabsContent value="grid">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {sermons.map((sermon) => (
                  <SermonCard key={sermon.id} sermon={sermon} />
                ))}
              </div>
            </TabsContent>

            {/* List View */}
            <TabsContent value="list">
              <div className="space-y-4 mt-6">
                {sermons.map((sermon) => (
                  <SermonListItem key={sermon.id} sermon={sermon} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <div className="flex gap-2">
              <Button variant="outline" size="icon" disabled>
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
              <Button variant="outline" className="w-10">
                1
              </Button>
              <Button variant="outline" className="w-10">
                2
              </Button>
              <Button variant="outline" className="w-10">
                3
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
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="bg-muted py-12">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Never Miss a Message</h2>
            <p className="text-muted-foreground mb-6">
              Subscribe to receive notifications when new sermons are available.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="flex-1"
              />
              <Button type="submit">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
