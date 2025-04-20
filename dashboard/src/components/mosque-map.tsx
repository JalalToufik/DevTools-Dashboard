"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"

export default function MosqueMap() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading map
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Card className="overflow-hidden">
      {isLoading ? (
        <div className="h-[500px] flex items-center justify-center bg-muted">
          <p>Loading map...</p>
        </div>
      ) : (
        <div className="relative h-[500px] bg-muted">
          {/* In a real app, this would be a map component like Google Maps or Mapbox */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-muted-foreground">Map showing nearby mosques would appear here</p>
          </div>

          {/* Map markers would be placed here */}
          <div className="absolute top-1/4 left-1/3 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white font-bold">
            1
          </div>
          <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white font-bold">
            2
          </div>
          <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white font-bold">
            3
          </div>
        </div>
      )}
    </Card>
  )
}
