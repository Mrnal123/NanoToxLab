"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import Preloader from "./preloader"
import IntroVideo from "./intro-video"

interface PreloaderWrapperProps {
  children: React.ReactNode
}

export default function PreloaderWrapper({ children }: PreloaderWrapperProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [showPreloader, setShowPreloader] = useState(true)
  const [isInitialLoad, setIsInitialLoad] = useState(true)
  const pathname = usePathname()

  const isLandingPage = pathname === "/"

  useEffect(() => {
    const duration = isLandingPage && isInitialLoad ? 8000 : 2000

    const timer = setTimeout(() => {
      console.log("[v0] Initial preloader/intro finishing...")
      setIsLoading(false)
      setIsInitialLoad(false)
    }, duration)

    return () => clearTimeout(timer)
  }, [isLandingPage, isInitialLoad])

  useEffect(() => {
    if (!isInitialLoad) {
      console.log("[v0] Route change detected, showing preloader")
      setShowPreloader(true)
      setIsLoading(true)

      const timer = setTimeout(() => {
        console.log("[v0] Route change preloader finishing...")
        setIsLoading(false)
      }, 1500)

      return () => clearTimeout(timer)
    }
  }, [pathname, isInitialLoad])

  const handlePreloaderComplete = () => {
    console.log("[v0] Preloader/intro completed, hiding...")
    setShowPreloader(false)
  }

  const getPreloaderDuration = () => {
    if (isInitialLoad && isLandingPage) return 8000
    if (isInitialLoad) return 2000
    return isLoading ? 1500 : 1500 // Always minimum 1.5s for route changes
  }

  console.log("[DEBUG] PreloaderWrapper render:", {
    pathname,
    isLandingPage,
    isInitialLoad,
    showPreloader,
    isLoading,
    shouldShowIntroVideo: isLandingPage && isInitialLoad
  })

  return (
    <div className="min-h-screen bg-gray-900">
      {showPreloader && (
        <>
          {isLandingPage && isInitialLoad ? (
            <IntroVideo onComplete={handlePreloaderComplete} duration={getPreloaderDuration()} />
          ) : (
            <Preloader onComplete={handlePreloaderComplete} duration={getPreloaderDuration()} />
          )}
        </>
      )}
      <div className={showPreloader ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>{children}</div>
    </div>
  )
}
