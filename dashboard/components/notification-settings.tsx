"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ModeToggle } from "@/components/mode-toggle"

export default function NotificationSettings() {
  const [notifications, setNotifications] = useState({
    fajr: true,
    sunrise: false,
    dhuhr: true,
    asr: true,
    maghrib: true,
    isha: true,
  })

  const [times, setTimes] = useState({
    fajr: "15",
    sunrise: "10",
    dhuhr: "10",
    asr: "15",
    maghrib: "10",
    isha: "15",
  })

  const handleToggle = (prayer: string) => {
    setNotifications({
      ...notifications,
      [prayer]: !notifications[prayer as keyof typeof notifications],
    })
  }

  const handleTimeChange = (prayer: string, value: string) => {
    setTimes({
      ...times,
      [prayer]: value,
    })
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Prayer Notifications</CardTitle>
          <CardDescription>Choose which prayers you want to be notified for</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {Object.entries(notifications).map(([prayer, enabled]) => (
            <div key={prayer} className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor={`notify-${prayer}`} className="capitalize">
                  {prayer}
                </Label>
                <p className="text-sm text-muted-foreground">
                  {enabled
                    ? `${times[prayer as keyof typeof times]} minutes before ${prayer}`
                    : "Notifications disabled"}
                </p>
              </div>
              <Switch id={`notify-${prayer}`} checked={enabled} onCheckedChange={() => handleToggle(prayer)} />
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notification Timing</CardTitle>
          <CardDescription>Set how many minutes before each prayer to send notifications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {Object.entries(times).map(([prayer, time]) => (
            <div key={prayer} className="flex items-center justify-between">
              <Label htmlFor={`time-${prayer}`} className="capitalize">
                {prayer}
              </Label>
              <Select
                value={time}
                onValueChange={(value) => handleTimeChange(prayer, value)}
                disabled={!notifications[prayer as keyof typeof notifications]}
              >
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5 minutes</SelectItem>
                  <SelectItem value="10">10 minutes</SelectItem>
                  <SelectItem value="15">15 minutes</SelectItem>
                  <SelectItem value="20">20 minutes</SelectItem>
                  <SelectItem value="30">30 minutes</SelectItem>
                </SelectContent>
              </Select>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
          <CardDescription>Customize the app appearance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <Label htmlFor="dark-mode">Dark Mode</Label>
            <ModeToggle />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
