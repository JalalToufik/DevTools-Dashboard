"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Sun, Sunrise, Sunset, Moon } from "lucide-react"
import { calculatePrayerTimes } from "@/lib/prayer-times"

export default function PrayerTimesCard() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [prayerTimes, setPrayerTimes] = useState<any>(null)
  const [nextPrayer, setNextPrayer] = useState<string>("")
  const [countdown, setCountdown] = useState<string>("")

  useEffect(() => {
    // Get user's location (in a real app, would use geolocation API)
    const latitude = 51.5074 // London coordinates as example
    const longitude = -0.1278

    // Calculate prayer times
    const times = calculatePrayerTimes(latitude, longitude)
    setPrayerTimes(times)

    // Update time every second
    const interval = setInterval(() => {
      const now = new Date()
      setCurrentTime(now)

      // Find next prayer and calculate countdown
      const { nextPrayerName, timeRemaining } = getNextPrayer(times, now)
      setNextPrayer(nextPrayerName)
      setCountdown(timeRemaining)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  if (!prayerTimes) {
    return <div className="text-center p-8">Loading prayer times...</div>
  }

  const prayerIcons = {
    fajr: Sunrise,
    sunrise: Sun,
    dhuhr: Sun,
    asr: Sun,
    maghrib: Sunset,
    isha: Moon,
  }

  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold">{currentTime.toLocaleDateString("en-US", { weekday: "long" })}</h2>
            <p className="text-muted-foreground">
              {currentTime.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
          <Badge variant="outline" className="text-lg px-3 py-1">
            <Clock className="mr-1 h-4 w-4" />
            {currentTime.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })}
          </Badge>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Next Prayer</h3>
          <div className="bg-primary/10 rounded-lg p-4 flex justify-between items-center">
            <div>
              <p className="text-xl font-bold capitalize">{nextPrayer}</p>
              <p className="text-muted-foreground">{prayerTimes[nextPrayer.toLowerCase()]}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Remaining</p>
              <p className="text-xl font-bold">{countdown}</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {Object.entries(prayerTimes).map(([name, time]) => {
            const PrayerIcon = prayerIcons[name as keyof typeof prayerIcons] || Sun
            const isNext = name.toLowerCase() === nextPrayer.toLowerCase()

            return (
              <div
                key={name}
                className={`flex justify-between items-center p-2 rounded-md ${isNext ? "bg-primary/10" : ""}`}
              >
                <div className="flex items-center">
                  <div className={`p-2 rounded-full ${isNext ? "bg-primary/20" : "bg-muted"} mr-3`}>
                    <PrayerIcon className="h-5 w-5" />
                  </div>
                  <span className="font-medium capitalize">{name}</span>
                </div>
                <span className="font-medium">{time as string}</span>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

function getNextPrayer(prayerTimes: any, currentTime: Date) {
  // This is a simplified version - a real implementation would compare times properly
  const prayers = [
    { name: "Fajr", time: prayerTimes.fajr },
    { name: "Sunrise", time: prayerTimes.sunrise },
    { name: "Dhuhr", time: prayerTimes.dhuhr },
    { name: "Asr", time: prayerTimes.asr },
    { name: "Maghrib", time: prayerTimes.maghrib },
    { name: "Isha", time: prayerTimes.isha },
  ]

  // For demo purposes, just return a fixed prayer and countdown
  return {
    nextPrayerName: "Maghrib",
    timeRemaining: "01:23:45",
  }
}
