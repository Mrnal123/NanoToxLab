"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Bell, User } from "lucide-react"

export function Header() {
  return (
    <header className="h-16 bg-background/95 backdrop-blur-sm border-b border-primary/20 flex items-center justify-between px-6">
      <div className="flex items-center space-x-4 flex-1">
        <div className="relative max-w-md flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search simulations, materials..."
            className="pl-10 bg-background/50 border-primary/30 focus:border-primary"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="sm" className="hover:bg-primary/10">
          <Bell className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="sm" className="hover:bg-primary/10">
          <User className="w-5 h-5" />
        </Button>
      </div>
    </header>
  )
}
