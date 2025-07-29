import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DollarSign, TrendingUp, TrendingDown, Users, Download, Search, Filter } from "lucide-react"

export const metadata = {
  title: "Donations Management | Admin",
  description: "Manage church donations and transactions",
}

export default function DonationsPageClient() {
  // Mock donation data
  const recentDonations = [
    {
      id: "TXN001",
      donor: "John Smith",
      amount: 250.0,
      fund: "General Fund",
      method: "Credit Card",
      date: "2025-01-07",
      status: "Completed",
      recurring: false,
    },
    {
      id: "TXN002",
      donor: "Anonymous",
      amount: 100.0,
      fund: "Missions",
      method: "Bank Transfer",
      date: "2025-01-07",
      status: "Completed",
      recurring: true,
    },
    {
      id: "TXN003",
      donor: "Sarah Johnson",
      amount: 500.0,
      fund: "Building Fund",
      method: "Credit Card",
      date: "2025-01-06",
      status: "Completed",
      recurring: false,
    },
    {
      id: "TXN004",
      donor: "Michael Brown",
      amount: 75.0,
      fund: "General Fund",
      method: "PayPal",
      date: "2025-01-06",
      status: "Pending",
      recurring: true,
    },
    {
      id: "TXN005",
      donor: "Emily Davis",
      amount: 200.0,
      fund: "Youth Ministry",
      method: "Credit Card",
      date: "2025-01-05",
      status: "Completed",
      recurring: false,
    },
  ]

  const monthlyStats = [
    { month: "Jan", amount: 12500 },
    { month: "Feb", amount: 13200 },
    { month: "Mar", amount: 11800 },
    { month: "Apr", amount: 14500 },
    { month: "May", amount: 13900 },
    { month: "Jun", amount: 15200 },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Donations Management</h1>
          <p className="text-muted-foreground">Track and manage church donations and transactions</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Button>Generate Statement</Button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total This Month</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$15,234</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 flex items-center">
                <TrendingUp className="h-4 w-4 mr-1" />
                12%
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Donors</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 flex items-center">
                <TrendingUp className="h-4 w-4 mr-1" />
                8%
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Recurring Gifts</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$8,450</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 flex items-center">
                <TrendingUp className="h-4 w-4 mr-1" />
                5%
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Average Gift</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$97.65</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-500 flex items-center">
                <TrendingDown className="h-4 w-4 mr-1" />
                3%
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs Section */}
      <Tabs defaultValue="transactions" className="space-y-4">
        <TabsList>
          <TabsTrigger value="transactions">Recent Transactions</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="funds">Fund Breakdown</TabsTrigger>
        </TabsList>

        <TabsContent value="transactions" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Recent Transactions</CardTitle>
                  <CardDescription>Latest donation transactions</CardDescription>
                </div>
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search transactions..." className="pl-8 w-[250px]" />
                  </div>
                  <Select>
                    <SelectTrigger className="w-[150px]">
                      <SelectValue placeholder="Filter by fund" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Funds</SelectItem>
                      <SelectItem value="general">General Fund</SelectItem>
                      <SelectItem value="missions">Missions</SelectItem>
                      <SelectItem value="building">Building Fund</SelectItem>
                      <SelectItem value="youth">Youth Ministry</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Transaction ID</TableHead>
                    <TableHead>Donor</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Fund</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Type</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentDonations.map((donation) => (
                    <TableRow key={donation.id}>
                      <TableCell className="font-medium">{donation.id}</TableCell>
                      <TableCell>{donation.donor}</TableCell>
                      <TableCell>${donation.amount.toFixed(2)}</TableCell>
                      <TableCell>{donation.fund}</TableCell>
                      <TableCell>{donation.method}</TableCell>
                      <TableCell>{new Date(donation.date).toLocaleDateString()}</TableCell>
                      <TableCell>
                        <Badge variant={donation.status === "Completed" ? "default" : "secondary"}>
                          {donation.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={donation.recurring ? "outline" : "secondary"}>
                          {donation.recurring ? "Recurring" : "One-time"}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Giving Trend</CardTitle>
                <CardDescription>Donation amounts over the last 6 months</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {monthlyStats.map((stat, index) => (
                    <div key={stat.month} className="flex items-center justify-between">
                      <span className="text-sm font-medium">{stat.month} 2025</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-muted rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width: `${(stat.amount / 16000) * 100}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium">${stat.amount.toLocaleString()}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Fund Distribution</CardTitle>
                <CardDescription>How donations are distributed across funds</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">General Fund</span>
                    <span className="text-sm">45% ($6,855)</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "45%" }} />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Missions</span>
                    <span className="text-sm">25% ($3,809)</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: "25%" }} />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Building Fund</span>
                    <span className="text-sm">20% ($3,047)</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "20%" }} />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Youth Ministry</span>
                    <span className="text-sm">10% ($1,523)</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "10%" }} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="funds" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>General Fund</CardTitle>
                <CardDescription>Church operations and ministry</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$6,855</div>
                <p className="text-xs text-muted-foreground">45% of total donations</p>
                <div className="mt-4">
                  <div className="text-sm text-muted-foreground">Monthly Goal: $8,000</div>
                  <div className="w-full bg-muted rounded-full h-2 mt-1">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "85.7%" }} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Missions Fund</CardTitle>
                <CardDescription>Global and local missions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$3,809</div>
                <p className="text-xs text-muted-foreground">25% of total donations</p>
                <div className="mt-4">
                  <div className="text-sm text-muted-foreground">Monthly Goal: $4,000</div>
                  <div className="w-full bg-muted rounded-full h-2 mt-1">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: "95.2%" }} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Building Fund</CardTitle>
                <CardDescription>Facility maintenance and expansion</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$3,047</div>
                <p className="text-xs text-muted-foreground">20% of total donations</p>
                <div className="mt-4">
                  <div className="text-sm text-muted-foreground">Monthly Goal: $3,500</div>
                  <div className="w-full bg-muted rounded-full h-2 mt-1">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "87%" }} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
