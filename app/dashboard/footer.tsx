"use client"

export function DashboardFooter() {
  return (
    <footer className="mt-12 py-8 px-6 border-t border-primary/20 bg-background/50">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gradient-to-r from-primary to-secondary rounded"></div>
            <span className="font-mono font-bold">NanoToxLab</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2024 SRMIST Research Lab. All rights reserved.</p>
        </div>

        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <span>Version 2.1.0</span>
          <span>•</span>
          <span>Last updated: Today</span>
        </div>
      </div>
    </footer>
  )
}
