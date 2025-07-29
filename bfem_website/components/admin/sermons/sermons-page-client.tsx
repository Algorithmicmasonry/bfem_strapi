"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { FileText, Plus, Edit, Trash2, Search, Upload, Download, Play } from "lucide-react"

export default function SermonsManagementPageClient() {
  const [sermons, setSermons] = useState([
    {
      id: 1,
      title: "Walking in Faith: Trusting God in Uncertain Times",
      speaker: "Pastor John Smith",
      date: "2025-01-07",
      series: "Faith That Works",
      scripture: "Hebrews 11:1-6",
      status: "Published",
      audioFile: "sermon-001.mp3",
      notesFile: "sermon-001-notes.pdf",
      views: 245,
      downloads: 89,
    },
    {
      id: 2,
      title: "The Power of Prayer",
      speaker: "Pastor Sarah Johnson",
      date: "2025-01-01",
      series: "Prayer Warriors",
      scripture: "James 5:13-18",
      status: "Published",
      audioFile: "sermon-002.mp3",
      notesFile: "sermon-002-notes.pdf",
      views: 189,
      downloads: 67,
    },
    {
      id: 3,
      title: "Living with Purpose",
      speaker: "Pastor Michael Williams",
      date: "2024-12-25",
      series: "Purposeful Living",
      scripture: "Ephesians 2:10",
      status: "Draft",
      audioFile: null,
      notesFile: "sermon-003-notes.pdf",
      views: 0,
      downloads: 0,
    },
  ])

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingSermon, setEditingSermon] = useState(null)

  const handleAddSermon = () => {
    setEditingSermon(null)
    setIsDialogOpen(true)
  }

  const handleEditSermon = (sermon) => {
    setEditingSermon(sermon)
    setIsDialogOpen(true)
  }

  const handleDeleteSermon = (sermonId) => {
    setSermons(sermons.filter((sermon) => sermon.id !== sermonId))
  }

  const handleSaveSermon = (sermonData) => {
    if (editingSermon) {
      setSermons(sermons.map((sermon) => (sermon.id === editingSermon.id ? { ...sermon, ...sermonData } : sermon)))
    } else {
      const newSermon = {
        id: Math.max(...sermons.map((s) => s.id)) + 1,
        ...sermonData,
        views: 0,
        downloads: 0,
      }
      setSermons([...sermons, newSermon])
    }
    setIsDialogOpen(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Sermons Management</h1>
          <p className="text-muted-foreground">Upload and manage church sermons</p>
        </div>
        <Button onClick={handleAddSermon}>
          <Plus className="h-4 w-4 mr-2" />
          Add Sermon
        </Button>
      </div>

      {/* Overview Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Sermons</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{sermons.length}</div>
            <p className="text-xs text-muted-foreground">
              {sermons.filter((s) => s.status === "Published").length} published
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Views</CardTitle>
            <Play className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{sermons.reduce((sum, sermon) => sum + sermon.views, 0)}</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Downloads</CardTitle>
            <Download className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{sermons.reduce((sum, sermon) => sum + sermon.downloads, 0)}</div>
            <p className="text-xs text-muted-foreground">Audio & notes</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Series Active</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{new Set(sermons.map((s) => s.series)).size}</div>
            <p className="text-xs text-muted-foreground">Current series</p>
          </CardContent>
        </Card>
      </div>

      {/* Sermons Table */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>All Sermons</CardTitle>
              <CardDescription>Manage your sermon library</CardDescription>
            </div>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search sermons..." className="pl-8 w-[250px]" />
              </div>
              <Select>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Filter by series" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Series</SelectItem>
                  <SelectItem value="faith-works">Faith That Works</SelectItem>
                  <SelectItem value="prayer-warriors">Prayer Warriors</SelectItem>
                  <SelectItem value="purposeful-living">Purposeful Living</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Sermon</TableHead>
                <TableHead>Speaker</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Series</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Files</TableHead>
                <TableHead>Stats</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sermons.map((sermon) => (
                <TableRow key={sermon.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium line-clamp-1">{sermon.title}</div>
                      <div className="text-sm text-muted-foreground">{sermon.scripture}</div>
                    </div>
                  </TableCell>
                  <TableCell>{sermon.speaker}</TableCell>
                  <TableCell>{new Date(sermon.date).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{sermon.series}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={sermon.status === "Published" ? "default" : "secondary"}>{sermon.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      {sermon.audioFile && (
                        <Badge variant="outline" className="text-xs">
                          Audio
                        </Badge>
                      )}
                      {sermon.notesFile && (
                        <Badge variant="outline" className="text-xs">
                          Notes
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div>{sermon.views} views</div>
                      <div className="text-muted-foreground">{sermon.downloads} downloads</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" onClick={() => handleEditSermon(sermon)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleDeleteSermon(sermon.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Add/Edit Sermon Dialog */}
      <SermonDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onSave={handleSaveSermon}
        sermon={editingSermon}
      />
    </div>
  )
}

function SermonDialog({ isOpen, onClose, onSave, sermon }) {
  const [formData, setFormData] = useState({
    title: sermon?.title || "",
    speaker: sermon?.speaker || "",
    date: sermon?.date || "",
    series: sermon?.series || "",
    scripture: sermon?.scripture || "",
    status: sermon?.status || "Draft",
    description: sermon?.description || "",
    audioFile: sermon?.audioFile || null,
    notesFile: sermon?.notesFile || null,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(formData)
    setFormData({
      title: "",
      speaker: "",
      date: "",
      series: "",
      scripture: "",
      status: "Draft",
      description: "",
      audioFile: null,
      notesFile: null,
    })
  }

  const handleFileUpload = (type, file) => {
    // In a real app, you would upload the file to a server
    // For now, we'll just store the filename
    setFormData({ ...formData, [type]: file?.name || null })
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{sermon ? "Edit Sermon" : "Add New Sermon"}</DialogTitle>
          <DialogDescription>
            {sermon ? "Update the sermon details below." : "Upload a new sermon to your library."}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Sermon Title *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="speaker">Speaker *</Label>
              <Select value={formData.speaker} onValueChange={(value) => setFormData({ ...formData, speaker: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select speaker" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Pastor John Smith">Pastor John Smith</SelectItem>
                  <SelectItem value="Pastor Sarah Johnson">Pastor Sarah Johnson</SelectItem>
                  <SelectItem value="Pastor Michael Williams">Pastor Michael Williams</SelectItem>
                  <SelectItem value="Guest Speaker">Guest Speaker</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date">Date *</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="scripture">Scripture Reference</Label>
              <Input
                id="scripture"
                value={formData.scripture}
                onChange={(e) => setFormData({ ...formData, scripture: e.target.value })}
                placeholder="e.g., John 3:16-17"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="series">Series</Label>
              <Input
                id="series"
                value={formData.series}
                onChange={(e) => setFormData({ ...formData, series: e.target.value })}
                placeholder="e.g., Faith That Works"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select value={formData.status} onValueChange={(value) => setFormData({ ...formData, status: value })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Draft">Draft</SelectItem>
                  <SelectItem value="Published">Published</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={3}
              placeholder="Brief description of the sermon..."
            />
          </div>

          {/* File Upload Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Files</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="audioFile">Audio File</Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="audioFile"
                    type="file"
                    accept="audio/*"
                    onChange={(e) => handleFileUpload("audioFile", e.target.files?.[0])}
                  />
                  <Button type="button" variant="outline" size="icon">
                    <Upload className="h-4 w-4" />
                  </Button>
                </div>
                {formData.audioFile && <p className="text-sm text-muted-foreground">Current: {formData.audioFile}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="notesFile">Sermon Notes (PDF)</Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="notesFile"
                    type="file"
                    accept=".pdf"
                    onChange={(e) => handleFileUpload("notesFile", e.target.files?.[0])}
                  />
                  <Button type="button" variant="outline" size="icon">
                    <Upload className="h-4 w-4" />
                  </Button>
                </div>
                {formData.notesFile && <p className="text-sm text-muted-foreground">Current: {formData.notesFile}</p>}
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">{sermon ? "Update Sermon" : "Create Sermon"}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
