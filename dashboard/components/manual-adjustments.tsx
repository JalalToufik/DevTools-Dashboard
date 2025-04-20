"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function ManualAdjustments() {
  const [adjustments, setAdjustments] = useState({
    fajr: 0,
    sunrise: 0,
    dhuhr: 0,
    asr: 0,
    maghrib: 0,
    isha: 0,
  })

  const handleChange = (prayer: string, value: string) => {
    setAdjustments({
      ...adjustments,
      [prayer]: Number.parseInt(value) || 0,
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Manual Adjustments</CardTitle>
        <CardDescription>Fine-tune prayer times (in minutes)</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(adjustments).map(([prayer, value]) => (
            <div key={prayer} className="space-y-2">
              <Label htmlFor={`adjust-${prayer}`} className="capitalize">
                {prayer}
              </Label>
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-r-none"
                  onClick={() => handleChange(prayer, String(value - 1))}
                >
                  -
                </Button>
                <Input
                  id={`adjust-${prayer}`}
                  type="number"
                  value={value}
                  onChange={(e) => handleChange(prayer, e.target.value)}
                  className="rounded-none text-center w-16"
                />
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-l-none"
                  onClick={() => handleChange(prayer, String(value + 1))}
                >
                  +
                </Button>
                <span className="ml-2 text-sm text-muted-foreground">min</span>
              </div>
            </div>
          ))}
        </div>

        <Button className="mt-6 w-full">Save Adjustments</Button>
      </CardContent>
    </Card>
  )
}
