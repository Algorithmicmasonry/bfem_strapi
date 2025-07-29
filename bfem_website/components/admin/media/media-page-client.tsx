"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import {
  Upload,
  Search,
  Filter,
  Edit,
  Trash2,
  Eye,
  Download,
  Plus,
  ImageIcon,
  Calendar,
  User,
  Grid3X3,
  List,
  MoreHorizontal,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function MediaManagementPageClient() {
  const [mediaItems, setMediaItems] = useState([
    {
      id: 1,
      filename: "church-service-1.jpg",
      caption: "Sunday morning worship service with the congregation",
      category: "Services",
      uploadDate: "2025-01-05",
      uploadedBy: "Pastor John",
      size: "2.4 MB",
      dimensions: "1920x1080",
      url: "/placeholder.svg?height=400&width=600",
      alt: "Sunday morning worship service",
    },
    {
      id: 2,
      filename: "youth-camp-2024.jpg",
      caption: "Youth summer camp activities and fellowship",
      category: "Youth",
      uploadDate: "2025-01-03",
      uploadedBy: "Sarah Johnson",
      size: "3.1 MB",
      dimensions: "1920x1280",
      url: "/placeholder.svg?height=400&width=600",
      alt: "Youth summer camp",
    },
    {
      id: 3,
      filename: "community-outreach.jpg",
      caption: "Community outreach event serving local families",
      category: "Outreach",
      uploadDate: "2025-01-01",
      uploadedBy: "Michael Williams",
      size: "1.8 MB",
      dimensions: "1600x1200",
      url: "/placeholder.svg?height=400&width=600",
      alt: "Community outreach event",
    },
    {
      id: 4,
      filename: "baptism-ceremony.jpg",
      caption: "Baptism ceremony at the lake",
      category: "Ceremonies",
      uploadDate: "2024-12-28",
      uploadedBy: "Pastor John",
      size: "2.7 MB",
      dimensions: "1920x1080",
      url: "/placeholder.svg?height=400&width=600",
      alt: "Baptism ceremony",
    },
    {
      id: 5,
      filename: "christmas-service.jpg",
      caption: "Christmas Eve candlelight service",
      category: "Services",
      uploadDate: "2024-12-24",
      uploadedBy: "Sarah Johnson",
      size: "2.2 MB",
      dimensions: "1920x1080",
      url: "/placeholder.svg?height=400&width=600",
      alt: "Christmas Eve service",
    },
    {
      id: 6,
      filename: "church-building.jpg",
      caption: "Grace Church main building exterior",
      category: "Building",
      uploadDate: "2024-12-20",
      uploadedBy: "Admin",
      size: "4.1 MB",
      dimensions: "2400x1600",
      url: "/placeholder.svg?height=400&width=600",
      alt: "Church building exterior",
    },
  ])

  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  const [viewMode, setViewMode] = useState("grid")
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")

  const categories = ["Services", "Youth", "Outreach", "Ceremonies", "Building", "Events", "Ministry"]

  const filteredItems = mediaItems.filter((item) => {
    const matchesSearch =
      item.caption.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.filename.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "all" || item.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  const handleUpload = (uploadData) => {
    const newItem = {
      id: Math.max(...mediaItems.map((item) => item.id)) + 1,
      ...uploadData,
      uploadDate: new Date().toISOString().split("T")[0],
      uploadedBy: "Current User",
      url: "/placeholder.svg?height=400&width=600", // In real app, this would be the uploaded file URL
    }
    setMediaItems([newItem, ...mediaItems])
    setIsUploadDialogOpen(false)
  }

  const handleEdit = (editData) => {
    setMediaItems(mediaItems.map((item) => (item.id === selectedItem.id ? { ...item, ...editData } : item)))
    setIsEditDialogOpen(false)
    setSelectedItem(null)
  }

  const handleDelete = () => {
    setMediaItems(mediaItems.filter((item) => item.id !== selectedItem.id))
    setIsDeleteDialogOpen(false)
    setSelectedItem(null)
  }

  const openEditDialog = (item) => {
    setSelectedItem(item)
    setIsEditDialogOpen(true)
  }

  const openDeleteDialog = (item) => {
    setSelectedItem(item)
    setIsDeleteDialogOpen(true)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Media Gallery</h1>
          <p className="text-muted-foreground">Manage images for the church website gallery</p>
        </div>
        <Button onClick={() => setIsUploadDialogOpen(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Upload Images
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Images</CardTitle>
            <ImageIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mediaItems.length}</div>
            <p className="text-xs text-muted-foreground">
              {
                mediaItems.filter(
                  (item) =>
                    item.uploadDate >= new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
                ).length
              }{" "}
              added this month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Categories</CardTitle>
            <Filter className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{new Set(mediaItems.map((item) => item.category)).size}</div>
            <p className="text-xs text-muted-foreground">Different categories</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Storage Used</CardTitle>
            <Download className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {mediaItems.reduce((sum, item) => sum + Number.parseFloat(item.size), 0).toFixed(1)} MB
            </div>
            <p className="text-xs text-muted-foreground">Total file size</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Recent Uploads</CardTitle>
            <Upload className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {
                mediaItems.filter((item) => {
                  const uploadDate = new Date(item.uploadDate)
                  const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
                  return uploadDate >= weekAgo
                }).length
              }
            </div>
            <p className="text-xs text-muted-foreground">This week</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <CardTitle>Media Library</CardTitle>
              <CardDescription>Browse and manage your uploaded images</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("grid")}
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search images by caption or filename..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Media Grid/List View */}
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredItems.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <div className="relative aspect-video">
                    <Image src={item.url || "/placeholder.svg"} alt={item.alt} fill className="object-cover" />
                    <div className="absolute top-2 right-2">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="secondary" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => openEditDialog(item)}>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4" />
                            View
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => openDeleteDialog(item)} className="text-destructive">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">{item.category}</Badge>
                        <span className="text-xs text-muted-foreground">{item.size}</span>
                      </div>
                      <h3 className="font-medium line-clamp-1">{item.filename}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{item.caption}</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{new Date(item.uploadDate).toLocaleDateString('en-US')}</span>
                        <span>{item.dimensions}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredItems.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="relative w-20 h-20 flex-shrink-0">
                        <Image
                          src={item.url || "/placeholder.svg"}
                          alt={item.alt}
                          fill
                          className="object-cover rounded-md"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div className="space-y-1">
                            <h3 className="font-medium">{item.filename}</h3>
                            <p className="text-sm text-muted-foreground line-clamp-2">{item.caption}</p>
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                              <span className="flex items-center">
                                <Calendar className="h-3 w-3 mr-1" />
                                {new Date(item.uploadDate).toLocaleDateString('en-US')}
                              </span>
                              <span className="flex items-center">
                                <User className="h-3 w-3 mr-1" />
                                {item.uploadedBy}
                              </span>
                              <Badge variant="outline">{item.category}</Badge>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="text-right text-xs text-muted-foreground">
                              <div>{item.size}</div>
                              <div>{item.dimensions}</div>
                            </div>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => openEditDialog(item)}>
                                  <Edit className="mr-2 h-4 w-4" />
                                  Edit
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Eye className="mr-2 h-4 w-4" />
                                  View
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Download className="mr-2 h-4 w-4" />
                                  Download
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => openDeleteDialog(item)} className="text-destructive">
                                  <Trash2 className="mr-2 h-4 w-4" />
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <ImageIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No images found</h3>
              <p className="text-muted-foreground mb-4">
                {searchTerm || categoryFilter !== "all"
                  ? "Try adjusting your search or filter criteria"
                  : "Upload your first image to get started"}
              </p>
              {!searchTerm && categoryFilter === "all" && (
                <Button onClick={() => setIsUploadDialogOpen(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Upload Images
                </Button>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Upload Dialog */}
      <UploadDialog
        isOpen={isUploadDialogOpen}
        onClose={() => setIsUploadDialogOpen(false)}
        onUpload={handleUpload}
        categories={categories}
      />

      {/* Edit Dialog */}
      <EditDialog
        isOpen={isEditDialogOpen}
        onClose={() => {
          setIsEditDialogOpen(false)
          setSelectedItem(null)
        }}
        onSave={handleEdit}
        item={selectedItem}
        categories={categories}
      />

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Image</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete "{selectedItem?.filename}"? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setSelectedItem(null)}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

function UploadDialog({ isOpen, onClose, onUpload, categories }) {
  const [formData, setFormData] = useState({
    filename: "",
    caption: "",
    category: "",
    alt: "",
    files: null,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.files || formData.files.length === 0) return

    // In a real app, you would upload files to a server here
    // For now, we'll simulate the upload
    Array.from(formData.files).forEach((file, index) => {
      const uploadData = {
        filename: file.name,
        caption: formData.caption || `Image ${index + 1}`,
        category: formData.category,
        alt: formData.alt || formData.caption || file.name,
        size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
        dimensions: "1920x1080", // In real app, you'd get this from the file
      }
      onUpload(uploadData)
    })

    setFormData({
      filename: "",
      caption: "",
      category: "",
      alt: "",
      files: null,
    })
  }

  const handleFileChange = (e) => {
    const files = e.target.files
    setFormData({ ...formData, files })

    // Auto-fill filename if only one file
    if (files && files.length === 1) {
      setFormData((prev) => ({ ...prev, filename: files[0].name }))
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Upload Images</DialogTitle>
          <DialogDescription>
            Upload new images to the gallery. You can select multiple files at once.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="files">Select Images *</Label>
            <Input id="files" type="file" accept="image/*" multiple onChange={handleFileChange} required />
            <p className="text-xs text-muted-foreground">
              Supported formats: JPG, PNG, GIF, WebP. Max size: 10MB per file.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="category">Category *</Label>
              <Select
                value={formData.category}
                onValueChange={(value) => setFormData({ ...formData, category: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="filename">Display Name</Label>
              <Input
                id="filename"
                value={formData.filename}
                onChange={(e) => setFormData({ ...formData, filename: e.target.value })}
                placeholder="Auto-filled from file name"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="caption">Caption *</Label>
            <Textarea
              id="caption"
              value={formData.caption}
              onChange={(e) => setFormData({ ...formData, caption: e.target.value })}
              placeholder="Describe what's in this image..."
              rows={3}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="alt">Alt Text</Label>
            <Input
              id="alt"
              value={formData.alt}
              onChange={(e) => setFormData({ ...formData, alt: e.target.value })}
              placeholder="Alternative text for accessibility (auto-filled from caption)"
            />
            <p className="text-xs text-muted-foreground">Used by screen readers. If empty, caption will be used.</p>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              <Upload className="h-4 w-4 mr-2" />
              Upload Images
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

function EditDialog({ isOpen, onClose, onSave, item, categories }) {
  const [formData, setFormData] = useState({
    filename: "",
    caption: "",
    category: "",
    alt: "",
  })

  // Update form data when item changes
  useState(() => {
    if (item) {
      setFormData({
        filename: item.filename || "",
        caption: item.caption || "",
        category: item.category || "",
        alt: item.alt || "",
      })
    }
  }, [item])

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(formData)
  }

  if (!item) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Edit Image</DialogTitle>
          <DialogDescription>Update the image details and caption.</DialogDescription>
        </DialogHeader>

        <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
          <Image src={item.url || "/placeholder.svg"} alt={item.alt} fill className="object-cover" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="edit-filename">Display Name</Label>
              <Input
                id="edit-filename"
                value={formData.filename}
                onChange={(e) => setFormData({ ...formData, filename: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-category">Category</Label>
              <Select
                value={formData.category}
                onValueChange={(value) => setFormData({ ...formData, category: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="edit-caption">Caption</Label>
            <Textarea
              id="edit-caption"
              value={formData.caption}
              onChange={(e) => setFormData({ ...formData, caption: e.target.value })}
              rows={3}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="edit-alt">Alt Text</Label>
            <Input
              id="edit-alt"
              value={formData.alt}
              onChange={(e) => setFormData({ ...formData, alt: e.target.value })}
              placeholder="Alternative text for accessibility"
            />
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              <Edit className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
