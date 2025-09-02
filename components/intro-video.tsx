"use client"

import { useEffect, useState, useRef, useCallback } from "react"

interface IntroVideoProps {
  onComplete?: () => void
  duration?: number
}

export default function IntroVideo({ onComplete, duration = 8000 }: IntroVideoProps) {
  console.log("[DEBUG] IntroVideo function called")
  const [isVisible, setIsVisible] = useState(true)
  const [isPlaying, setIsPlaying] = useState(true)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  console.log("[DEBUG] videoRef created:", videoRef)
  const [hasCompleted, setHasCompleted] = useState(false) // New state to track completion

  console.log("[DEBUG] IntroVideo render:", {
    isVisible,
    isPlaying,
    videoLoaded,
    videoError,
    hasCompleted,
    duration
  })

  const videoRefCallback = useCallback((el: HTMLVideoElement | null) => {
    console.log('[DEBUG] Video ref callback called with:', el);
    videoRef.current = el;
    if (el) {
      console.log('[DEBUG] Video element attached, src:', el.src);
      console.log('[DEBUG] Video element readyState:', el.readyState);
      console.log('[DEBUG] Attempting to play video');
      el.play().catch(e => {
        console.log('[DEBUG] Video play failed:', e);
        console.log('[DEBUG] Video play error name:', e.name);
        console.log('[DEBUG] Video play error message:', e.message);
      });
    }
  }, []);

  useEffect(() => {
    console.log("[DEBUG] IntroVideo useEffect mounted - component is in DOM")
    console.log("[DEBUG] IntroVideo mounted, videoRef.current:", videoRef.current)
    
    // Check if component is actually in DOM
    const componentInDOM = document.querySelector('.intro-video-container')
    console.log("[DEBUG] Component found in DOM:", !!componentInDOM)
    
    if (videoRef.current) {
      console.log("[DEBUG] Video element src:", videoRef.current.src)
      console.log("[DEBUG] Video element readyState:", videoRef.current.readyState)
      console.log("[DEBUG] Video element networkState:", videoRef.current.networkState)
      // Try to manually load the video
      videoRef.current.load()
    } else {
      console.log("[DEBUG] videoRef.current is null, video element not attached")
    }
  }, [])

  // Additional useEffect to check videoRef after render
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("[DEBUG] Checking videoRef after render:", videoRef.current)
      if (videoRef.current) {
        console.log("[DEBUG] Video element found, attempting to load")
        videoRef.current.load()
      }
    }, 100)
    return () => clearTimeout(timer)
  }, [isVisible])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasCompleted) { // Check if already completed
        setIsPlaying(false)
        setTimeout(() => {
          setIsVisible(false)
          onComplete?.()
          setHasCompleted(true) // Set completion flag
        }, 500)
      }
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onComplete, hasCompleted]) // Add hasCompleted to dependencies

  const handleVideoLoaded = () => {
    setVideoLoaded(true)
    setVideoError(false)
  }

  const handleVideoError = () => {
    setVideoError(true)
    setVideoLoaded(false)
  }

  const handleVideoEnded = () => {
    if (!hasCompleted) { // Check if already completed
      setIsPlaying(false)
      setTimeout(() => {
        setIsVisible(false)
        onComplete?.()
        setHasCompleted(true) // Set completion flag
      }, 500)
    }
  };

  const skipIntro = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsPlaying(false);
    setTimeout(() => {
      setIsVisible(false);
      if (!hasCompleted) { // Check if already completed
        onComplete?.()
        setHasCompleted(true) // Set completion flag
      }
    }, 100);
  };

  if (!isVisible) return null

  console.log('[DEBUG] About to render video element, isVisible:', isVisible, 'isPlaying:', isPlaying)

  return (
    <div className="fixed inset-0 z-50 bg-black intro-video-container">
      <video
        ref={(el) => {
          console.log('[DEBUG] Simple video ref callback:', el);
          if (el) {
            console.log('[DEBUG] Video element found, playing');
            el.play().catch(e => console.log('[DEBUG] Play error:', e));
          }
        }}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="/video.webm"
      />

    </div>
  )
}
