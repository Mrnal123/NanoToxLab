"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Home, FlaskConical, BarChart3, BookOpen, Settings, User, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const pathname = usePathname()

  const menuItems = [
    { icon: Home, label: "Dashboard", href: "/dashboard" },
    { icon: FlaskConical, label: "Simulations", href: "/simulations" },
    { icon: BarChart3, label: "Analytics", href: "/analytics" },
    { icon: BookOpen, label: "Knowledge Hub", href: "/knowledge" },
    { icon: Settings, label: "Settings", href: "/settings" },
    { icon: User, label: "Profile", href: "/profile" },
  ]

  return (
    <div
      className={`fixed left-0 top-0 h-full bg-background/95 backdrop-blur-sm border-r border-primary/20 transition-all duration-300 ${isCollapsed ? "w-16" : "w-64"}`}
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-8">
          {!isCollapsed && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <FlaskConical className="w-5 h-5 text-white" />
              </div>
              <span className="font-mono font-bold text-lg">NanoToxLab</span>
            </div>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hover:bg-primary/10"
          >
            {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </Button>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={isActive ? "default" : "ghost"}
                  className={`w-full justify-start hover:bg-primary/10 ${isCollapsed ? "px-2" : "px-4"} ${isActive ? "bg-primary/20 text-primary" : ""}`}
                >
                  <item.icon className="w-5 h-5" />
                  {!isCollapsed && <span className="ml-3">{item.label}</span>}
                </Button>
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
