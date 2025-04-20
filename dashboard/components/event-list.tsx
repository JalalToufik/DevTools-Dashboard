"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin } from "lucide-react"
import { getEvents } from "@/lib/event-data"

export default function EventList() {
  const [events, setEvents] = useState<any[]>([])

  useEffect(() => {
    // In a real app, this would fetch from an API
    const data = getEvents()
    setEvents(data)
  }, [])

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Upcoming Events</h2>

      {events.map((event) => (
        <Card key={event.id} className="hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-shrink-0 flex items-center justify-center bg-primary/10 rounded-lg p-4 w-full md:w-24 h-24">
                <div className="text-center">
                  <div className="text-2xl font-bold">{new Date(event.date).getDate()}</div>
                  <div className="text-sm">{new Date(event.date).toLocaleDateString("en-US", { month: "short" })}</div>
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <h3 className="font-medium text-lg">{event.title}</h3>
                  <Badge variant="outline">{event.type}</Badge>
                </div>

                <p className="mt-1 text-muted-foreground line-clamp-2">{event.description}</p>

                <div className="mt-3 flex flex-col sm:flex-row gap-3 text-sm">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span>{event.location}</span>
                  </div>

                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span>{event.time}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
