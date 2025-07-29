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
} from "lucide-react";
import { SermonType } from "@/types/types";

// Mock sermon data - moved outside component to reduce re-renders
const sermons = [
  {
    id: 1,
    title: "Walking in Faith: Trusting God in Uncertain Times",
    speaker: "Pastor John Smith",
    date: "June 9, 2025",
    scripture: "Hebrews 11:1-6",
    series: "Faith That Works",
    description:
      "In this powerful message, Pastor John explores how we can maintain our faith and trust in God even when facing life's most challenging circumstances.",
    image: "/placeholder.svg?height=200&width=350",
    audioUrl: "#",
    documentUrl: "#",
  },
  {
    id: 2,
    title: "The Power of Prayer",
    speaker: "Pastor Sarah Johnson",
    date: "June 2, 2025",
    scripture: "James 5:13-18",
    series: "Prayer Warriors",
    description:
      "Discover the transformative power of prayer in this inspiring message about connecting with God through consistent prayer.",
    image: "/placeholder.svg?height=200&width=350",
    audioUrl: "#",
    documentUrl: "#",
  },
  {
    id: 3,
    title: "Living with Purpose",
    speaker: "Pastor Michael Williams",
    date: "May 26, 2025",
    scripture: "Ephesians 2:10",
    series: "Purposeful Living",
    description:
      "Learn how to discover and live out God's unique purpose for your life in this encouraging message.",
    image: "/placeholder.svg?height=200&width=350",
    audioUrl: "#",
    documentUrl: "#",
  },
  {
    id: 4,
    title: "The Heart of Worship",
    speaker: "Pastor John Smith",
    date: "May 19, 2025",
    scripture: "John 4:23-24",
    series: "Worship Series",
    description:
      "Explore what it means to worship God in spirit and truth, and how authentic worship transforms our lives.",
    image: "/placeholder.svg?height=200&width=350",
    audioUrl: "#",
    documentUrl: "#",
  },
  {
    id: 5,
    title: "Building Strong Families",
    speaker: "Pastor Sarah Johnson",
    date: "May 12, 2025",
    scripture: "Deuteronomy 6:4-9",
    series: "Family Matters",
    description:
      "Practical biblical wisdom for creating healthy, God-centered families in today's challenging world.",
    image: "/placeholder.svg?height=200&width=350",
    audioUrl: "#",
    documentUrl: "#",
  },
  {
    id: 6,
    title: "Overcoming Anxiety",
    speaker: "Pastor Michael Williams",
    date: "May 5, 2025",
    scripture: "Philippians 4:6-7",
    series: "Peace of Mind",
    description:
      "Find God's peace that surpasses understanding as we learn biblical strategies for overcoming worry and anxiety.",
    image: "/placeholder.svg?height=200&width=350",
    audioUrl: "#",
    documentUrl: "#",
  },
];

// Separate components to improve performance
function SermonCard({ sermon }: SermonCardProps) {
  return (
    <Card key={sermon.id}>
      <div className="relative aspect-video">
        <Image
          src={sermon.image || "/placeholder.svg"}
          alt={sermon.title}
          fill
          className="object-cover rounded-t-lg"
        />
        <div className="absolute top-2 left-2">
          <Badge>{sermon.series}</Badge>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-2">{sermon.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>{sermon.speaker}</span>
          </div>
          <div className="flex items-center">
            <CalendarDays className="h-4 w-4 mr-1" />
            <span>{sermon.date}</span>
          </div>
        </div>
        <p className="line-clamp-3 text-muted-foreground">
          {sermon.description}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href={`/sermons/${sermon.id}`}>
          <Button variant="outline" size="sm">
            Watch
          </Button>
        </Link>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon">
            <Headphones className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

interface SermonCardProps {
  sermon: SermonType;
}

function SermonListItem({ sermon }: SermonCardProps) {
  return (
    <Card key={sermon.id}>
      <div className="flex flex-col md:flex-row">
        <div className="relative w-full md:w-[200px] aspect-video md:aspect-[4/3]">
          <Image
            src={sermon.image || "/placeholder.svg"}
            alt={sermon.title}
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
              <span>{sermon.speaker}</span>
            </div>
            <div className="flex items-center">
              <CalendarDays className="h-4 w-4 mr-1" />
              <span>{sermon.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>45 minutes</span>
            </div>
          </div>
          <p className="text-muted-foreground mb-4">{sermon.description}</p>
          <div className="flex flex-wrap gap-3">
            <Link href={`/sermons/${sermon.id}`}>
              <Button>Watch Now</Button>
            </Link>
            <Button variant="outline">
              <Headphones className="h-4 w-4 mr-2" /> Listen
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" /> Download Notes
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default function SermonsPageClient() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[100px] flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <div className="flex items-center justify-center">
            <div className="my-auto flex items-center justify-center">
            <h1 className="font-semibold text-4xl text-center my-auto py-10">
              Sermon Library
            </h1>
            </div>
          </div>
          {/* <Image
            src="/placeholder.svg?height=300&width=1920"
            alt="Sermons"
            fill
            className="object-cover brightness-50"
            priority
          /> */}
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
                    <SelectItem value="faith-works">
                      Faith That Works
                    </SelectItem>
                    <SelectItem value="prayer-warriors">
                      Prayer Warriors
                    </SelectItem>
                    <SelectItem value="purposeful-living">
                      Purposeful Living
                    </SelectItem>
                    <SelectItem value="worship">Worship Series</SelectItem>
                    <SelectItem value="family">Family Matters</SelectItem>
                    <SelectItem value="peace">Peace of Mind</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Speaker" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Speakers</SelectItem>
                    <SelectItem value="john-smith">
                      Pastor John Smith
                    </SelectItem>
                    <SelectItem value="sarah-johnson">
                      Pastor Sarah Johnson
                    </SelectItem>
                    <SelectItem value="michael-williams">
                      Pastor Michael Williams
                    </SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Date" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                    <SelectItem value="2025">2025</SelectItem>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
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
