"use client"

import { useState, useEffect } from "react"
import { Compass } from "lucide-react"

export default function QiblaCompass() {
  const [direction, setDirection] = useState<number | null>(null)
  const [heading, setHeading] = useState<number>(0)

  useEffect(() => {
    // In a real app, calculate Qibla direction based on user's location
    // For demo purposes, we'll use a fixed value
    setDirection(135) // Example: 135 degrees

    // Set up device orientation listener for compass functionality
    if (window.DeviceOrientationEvent) {
      const handleOrientation = (event: any) => {
        if (event.webkitCompassHeading) {
          // For iOS devices
          setHeading(event.webkitCompassHeading)
        } else if (event.alpha) {
          // For Android devices
          setHeading(360 - event.alpha)
        }
      }

      window.addEventListener("deviceorientation", handleOrientation, true)

      return () => {
        window.removeEventListener("deviceorientation", handleOrientation, true)
      }
    }
  }, [])

  const qiblaRotation = direction !== null ? direction - heading : 0

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-64 h-64">
        <div className="absolute inset-0 rounded-full border-2 border-muted-foreground flex items-center justify-center">
          <div className="absolute w-full h-full">
            {/* Compass markings */}
            {["N", "E", "S", "W"].map((direction, index) => (
              <div
                key={direction}
                className="absolute top-2 left-1/2 -translate-x-1/2 font-bold"
                style={{
                  transform: `rotate(${index * 90}deg) translateY(-30px) translateX(-50%)`,
                  transformOrigin: "bottom center",
                }}
              >
                {direction}
              </div>
            ))}
          </div>

          {/* Compass needle */}
          <div
            className="relative h-56 w-56 transition-transform duration-300"
            style={{ transform: `rotate(${heading}deg)` }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-28 bg-red-500" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-28 bg-gray-500" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary" />
          </div>

          {/* Qibla indicator */}
          {direction !== null && (
            <div
              className="absolute top-1/2 left-1/2 w-full h-full pointer-events-none"
              style={{ transform: `rotate(${qiblaRotation}deg)` }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                  <Compass className="h-4 w-4 text-white" />
                </div>
                <div className="mt-1 px-2 py-1 bg-green-500 text-white text-xs rounded">Qibla</div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 text-center">
        <p className="text-sm text-muted-foreground">Point your phone in this direction to face the Kaaba</p>
        {direction !== null && <p className="font-medium mt-1">Qibla is at {direction.toFixed(1)}° from North</p>}
      </div>
    </div>
  )
}
