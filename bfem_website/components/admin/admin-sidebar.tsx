"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  BarChart3,
  BookOpen,
  Calendar,
  DollarSign,
  FileText,
  Home,
  ImageIcon,
  LogOut
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function AdminSidebar() {
  const pathname = usePathname()

  const routes = [
    {
      href: "/admin/dashboard",
      label: "Dashboard",
      icon: BarChart3,
    },
    {
      href: "/admin/donations",
      label: "Donations",
      icon: DollarSign,
    },
    {
      href: "/admin/events",
      label: "Events",
      icon: Calendar,
    },
    {
      href: "/admin/sermons",
      label: "Sermons",
      icon: FileText,
    },
    // {
    //   href: "/admin/blog",
    //   label: "Blog",
    //   icon: MessageSquare,
    // },
    {
      href: "/admin/media",
      label: "Media",
      icon: ImageIcon,
    },
    // {
    //   href: "/admin/content",
    //   label: "Content",
    //   icon: PenTool,
    // },
    // {
    //   href: "/admin/users",
    //   label: "Users",
    //   icon: Users,
    // },
    // {
    //   href: "/admin/settings",
    //   label: "Settings",
    //   icon: Settings,
    // },
  ]

  return (
    <div className="hidden md:flex w-64 flex-col bg-background border-r">
      <div className="p-6 border-b">
        <Link href="/admin" className="flex items-center space-x-2">
          <BookOpen className="h-6 w-6" />
          <span className="text-lg font-semibold">BFEM Admin</span>
        </Link>
        <p className="text-sm text-muted-foreground mt-1">Church Management</p>
      </div>
      <nav className="flex-1 px-4 py-4 space-y-1">
        {routes.map((route) => {
          const isActive =
            pathname === route.href || (route.href !== "/admin" && pathname.startsWith(route.href))

          return (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                isActive ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted",
              )}
            >
              <route.icon className="mr-3 h-5 w-5" />
              {route.label}
            </Link>
          )
        })}
      </nav>
      <div className="p-4 border-t">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
            <Home className="h-4 w-4 mr-2" />
            View Site
          </Link>
          <Button variant="ghost" size="sm">
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
