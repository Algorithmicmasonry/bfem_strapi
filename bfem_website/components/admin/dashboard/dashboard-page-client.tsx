import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  BarChart3,
  Calendar,
  FileText,
  MessageSquare,
  Users,
  DollarSign,
  ChevronUp,
  ChevronDown,
  Clock,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Eye,
  Download,
  Plus,
} from "lucide-react"

export const metadata = {
  title: "Admin Dashboard | Grace Church",
  description: "Admin dashboard for Grace Church website management",
}

export default function AdminDashboardPageClient() {
  // Mock data for dashboard
  const stats = {
    totalDonations: 15234,
    donationGrowth: 12,
    websiteVisitors: 2350,
    visitorGrowth: 8,
    sermonDownloads: 845,
    sermonGrowth: -3,
    newMembers: 15,
    memberGrowth: 25,
  }

  const recentActivity = [
    {
      action: "New sermon uploaded",
      user: "Pastor John",
      time: "2 hours ago",
      icon: <FileText className="h-4 w-4" />,
      type: "sermon",
    },
    {
      action: "Donation received",
      user: "Anonymous",
      time: "5 hours ago",
      icon: <DollarSign className="h-4 w-4" />,
      type: "donation",
    },
    {
      action: "Event created",
      user: "Sarah Johnson",
      time: "Yesterday",
      icon: <Calendar className="h-4 w-4" />,
      type: "event",
    },
    {
      action: "Blog post published",
      user: "Pastor Michael",
      time: "2 days ago",
      icon: <MessageSquare className="h-4 w-4" />,
      type: "blog",
    },
    {
      action: "New user registered",
      user: "System",
      time: "3 days ago",
      icon: <Users className="h-4 w-4" />,
      type: "user",
    },
  ]

  const upcomingEvents = [
    {
      title: "Annual Church Picnic",
      date: "June 20, 2025",
      time: "11:00 AM - 3:00 PM",
      location: "City Park",
      attendees: 45,
      maxAttendees: 100,
    },
    {
      title: "Women's Conference",
      date: "July 15-17, 2025",
      time: "Various Times",
      location: "Main Sanctuary",
      attendees: 78,
      maxAttendees: 200,
    },
    {
      title: "Men's Breakfast",
      date: "June 14, 2025",
      time: "8:00 AM - 10:00 AM",
      location: "Fellowship Hall",
      attendees: 25,
      maxAttendees: 40,
    },
    {
      title: "Community Outreach",
      date: "June 27, 2025",
      time: "9:00 AM - 1:00 PM",
      location: "Downtown Community Center",
      attendees: 12,
      maxAttendees: 50,
    },
  ]

  const pendingTasks = [
    {
      task: "Upload Sunday's sermon",
      priority: "High",
      dueDate: "Today",
      completed: false,
    },
    {
      task: "Review and approve event submissions",
      priority: "Medium",
      dueDate: "Tomorrow",
      completed: false,
    },
    {
      task: "Update homepage banner",
      priority: "Low",
      dueDate: "This week",
      completed: true,
    },
    {
      task: "Prepare monthly newsletter",
      priority: "Medium",
      dueDate: "June 15",
      completed: false,
    },
    {
      task: "Review donation reports",
      priority: "High",
      dueDate: "June 20",
      completed: false,
    },
  ]

  const topSermons = [
    {
      title: "Walking in Faith: Trusting God in Uncertain Times",
      speaker: "Pastor John Smith",
      views: 245,
      downloads: 89,
    },
    {
      title: "The Power of Prayer",
      speaker: "Pastor Sarah Johnson",
      views: 189,
      downloads: 67,
    },
    {
      title: "Living with Purpose",
      speaker: "Pastor Michael Williams",
      views: 156,
      downloads: 45,
    },
  ]

  const donationsByFund = [
    { fund: "General Fund", amount: 6855, percentage: 45, color: "bg-blue-500" },
    { fund: "Missions", amount: 3809, percentage: 25, color: "bg-green-500" },
    { fund: "Building Fund", amount: 3047, percentage: 20, color: "bg-yellow-500" },
    { fund: "Youth Ministry", amount: 1523, percentage: 10, color: "bg-purple-500" },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Pastor John! Here's what's happening at Grace Church.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Quick Add
          </Button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Donations</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${stats.totalDonations.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              <span className={`flex items-center ${stats.donationGrowth > 0 ? "text-green-500" : "text-red-500"}`}>
                {stats.donationGrowth > 0 ? (
                  <ChevronUp className="h-4 w-4 mr-1" />
                ) : (
                  <ChevronDown className="h-4 w-4 mr-1" />
                )}
                {Math.abs(stats.donationGrowth)}%
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Website Visitors</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.websiteVisitors.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              <span className={`flex items-center ${stats.visitorGrowth > 0 ? "text-green-500" : "text-red-500"}`}>
                {stats.visitorGrowth > 0 ? (
                  <ChevronUp className="h-4 w-4 mr-1" />
                ) : (
                  <ChevronDown className="h-4 w-4 mr-1" />
                )}
                {Math.abs(stats.visitorGrowth)}%
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Sermon Downloads</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.sermonDownloads}</div>
            <p className="text-xs text-muted-foreground">
              <span className={`flex items-center ${stats.sermonGrowth > 0 ? "text-green-500" : "text-red-500"}`}>
                {stats.sermonGrowth > 0 ? (
                  <ChevronUp className="h-4 w-4 mr-1" />
                ) : (
                  <ChevronDown className="h-4 w-4 mr-1" />
                )}
                {Math.abs(stats.sermonGrowth)}%
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">New Members</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.newMembers}</div>
            <p className="text-xs text-muted-foreground">
              <span className={`flex items-center ${stats.memberGrowth > 0 ? "text-green-500" : "text-red-500"}`}>
                {stats.memberGrowth > 0 ? (
                  <ChevronUp className="h-4 w-4 mr-1" />
                ) : (
                  <ChevronDown className="h-4 w-4 mr-1" />
                )}
                {Math.abs(stats.memberGrowth)}%
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Recent Activity */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest actions on the website</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((item, i) => (
                <div key={i} className="flex items-center">
                  <div className="mr-4 rounded-full bg-primary/10 p-2 text-primary">{item.icon}</div>
                  <div className="flex-1">
                    <p className="font-medium">{item.action}</p>
                    <p className="text-sm text-muted-foreground">By {item.user}</p>
                  </div>
                  <div className="text-sm text-muted-foreground flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {item.time}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="w-full">
              View All Activity
            </Button>
          </CardFooter>
        </Card>

        {/* Quick Stats */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
            <CardDescription>Key metrics at a glance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Published Sermons</span>
              <span className="text-2xl font-bold">24</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Active Events</span>
              <span className="text-2xl font-bold">8</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Blog Posts</span>
              <span className="text-2xl font-bold">12</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Registered Users</span>
              <span className="text-2xl font-bold">156</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs Section */}
      <Tabs defaultValue="events" className="space-y-4">
        <TabsList>
          <TabsTrigger value="events">Upcoming Events</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="sermons">Top Sermons</TabsTrigger>
          <TabsTrigger value="donations">Donations</TabsTrigger>
        </TabsList>

        <TabsContent value="events" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Events in the next 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map((event, i) => (
                  <div key={i} className="flex items-start justify-between p-4 border rounded-lg">
                    <div className="flex items-start">
                      <div className="mr-4 rounded-md bg-primary/10 p-2 text-center min-w-[60px]">
                        <p className="text-xs text-primary">{event.date.split(",")[0].split(" ")[0].substring(0, 3)}</p>
                        <p className="text-lg font-bold text-primary">{event.date.split(",")[0].split(" ")[1]}</p>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{event.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {event.time} • {event.location}
                        </p>
                        <div className="mt-2">
                          <div className="flex items-center justify-between text-sm">
                            <span>
                              {event.attendees}/{event.maxAttendees} attendees
                            </span>
                            <span>{Math.round((event.attendees / event.maxAttendees) * 100)}%</span>
                          </div>
                          <Progress value={(event.attendees / event.maxAttendees) * 100} className="mt-1" />
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/admin/events">Edit</Link>
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full" asChild>
                <Link href="/admin/events">View All Events</Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="tasks" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Tasks</CardTitle>
              <CardDescription>Your pending tasks and to-dos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingTasks.map((task, i) => (
                  <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center">
                      <div className="mr-3">
                        {task.completed ? (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        ) : (
                          <div className="h-5 w-5 border-2 border-muted-foreground rounded-full" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className={`font-medium ${task.completed ? "line-through text-muted-foreground" : ""}`}>
                          {task.task}
                        </p>
                        <p className="text-sm text-muted-foreground">Due: {task.dueDate}</p>
                      </div>
                    </div>
                    <Badge
                      variant={
                        task.priority === "High" ? "destructive" : task.priority === "Medium" ? "default" : "outline"
                      }
                    >
                      {task.priority}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Add Task</Button>
              <Button variant="ghost">View All</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="sermons" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Sermons</CardTitle>
              <CardDescription>Most viewed and downloaded sermons this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topSermons.map((sermon, i) => (
                  <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium line-clamp-1">{sermon.title}</p>
                      <p className="text-sm text-muted-foreground">{sermon.speaker}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Eye className="h-4 w-4 mr-1" />
                        {sermon.views}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Download className="h-4 w-4 mr-1" />
                        {sermon.downloads}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full" asChild>
                <Link href="/admin/sermons">View All Sermons</Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="donations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Donation Breakdown</CardTitle>
              <CardDescription>How donations are distributed across funds</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {donationsByFund.map((fund, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{fund.fund}</span>
                      <span className="text-sm font-medium">${fund.amount.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Progress value={fund.percentage} className="flex-1" />
                      <span className="text-sm text-muted-foreground">{fund.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full" asChild>
                <Link href="/admin/donations">View All Donations</Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks and shortcuts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-24 flex flex-col items-center justify-center bg-transparent" asChild>
              <Link href="/admin/sermons">
                <FileText className="h-6 w-6 mb-1" />
                <span>Add Sermon</span>
              </Link>
            </Button>
            <Button variant="outline" className="h-24 flex flex-col items-center justify-center bg-transparent" asChild>
              <Link href="/admin/events">
                <Calendar className="h-6 w-6 mb-1" />
                <span>Create Event</span>
              </Link>
            </Button>
            <Button variant="outline" className="h-24 flex flex-col items-center justify-center bg-transparent" asChild>
              <Link href="/admin/blog">
                <MessageSquare className="h-6 w-6 mb-1" />
                <span>New Blog Post</span>
              </Link>
            </Button>
            <Button variant="outline" className="h-24 flex flex-col items-center justify-center bg-transparent" asChild>
              <Link href="/admin/donations">
                <BarChart3 className="h-6 w-6 mb-1" />
                <span>View Reports</span>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Alerts/Notifications */}
      <Card>
        <CardHeader>
          <CardTitle>System Alerts</CardTitle>
          <CardDescription>Important notifications and reminders</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
              <div>
                <p className="font-medium text-yellow-800">Backup Reminder</p>
                <p className="text-sm text-yellow-700">Weekly backup is scheduled for tonight at 2:00 AM</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <p className="font-medium text-blue-800">Donation Goal Update</p>
                <p className="text-sm text-blue-700">You're 85% toward this month's donation goal of $18,000</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <p className="font-medium text-green-800">Website Performance</p>
                <p className="text-sm text-green-700">Site speed has improved by 15% this month</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
