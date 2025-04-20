"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"

export default function EventCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  // Example event dates
  const eventDates = [
    new Date(2025, 3, 22),
    new Date(2025, 3, 25),
    new Date(2025, 3, 28),
    new Date(2025, 4, 2),
    new Date(2025, 4, 5),
  ]

  return (
    <Card>
      <CardContent className="p-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
          components={{
            DayContent: (props) => {
              const date = props.date

              // Check if this date has events
              const hasEvent = eventDates.some(
                (eventDate) =>
                  eventDate.getDate() === date.getDate() &&
                  eventDate.getMonth() === date.getMonth() &&
                  eventDate.getFullYear() === date.getFullYear(),
              )

              return (
                <div className="relative">
                  <div>{props.date.getDate()}</div>
                  {hasEvent && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                  )}
                </div>
              )
            },
          }}
        />

        <div className="mt-4">
          <h3 className="font-medium mb-2">Selected Date</h3>
          {date && (
            <div className="text-sm">
              <p className="font-medium">
                {date.toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>

              {/* Show events for selected date */}
              {eventDates.some(
                (eventDate) =>
                  eventDate.getDate() === date.getDate() &&
                  eventDate.getMonth() === date.getMonth() &&
                  eventDate.getFullYear() === date.getFullYear(),
              ) ? (
                <Badge className="mt-1">Events available</Badge>
              ) : (
                <p className="text-muted-foreground mt-1">No events scheduled</p>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
