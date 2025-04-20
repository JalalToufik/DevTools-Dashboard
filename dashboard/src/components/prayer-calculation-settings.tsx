"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function PrayerCalculationSettings() {
  const [method, setMethod] = useState("mwl")

  const calculationMethods = [
    {
      id: "mwl",
      name: "Muslim World League",
      description: "Standard method used by the Muslim World League",
    },
    {
      id: "isna",
      name: "Islamic Society of North America (ISNA)",
      description: "Used by many communities in North America",
    },
    {
      id: "egypt",
      name: "Egyptian General Authority",
      description: "Used in Egypt and many African countries",
    },
    {
      id: "makkah",
      name: "Umm al-Qura University, Makkah",
      description: "Used in Saudi Arabia and the Arabian Peninsula",
    },
    {
      id: "karachi",
      name: "University of Islamic Sciences, Karachi",
      description: "Used in Pakistan, Bangladesh, India, and Afghanistan",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Calculation Method</CardTitle>
        <CardDescription>Choose the method used to calculate prayer times</CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup value={method} onValueChange={setMethod} className="space-y-4">
          {calculationMethods.map((calcMethod) => (
            <div key={calcMethod.id} className="flex items-start space-x-2">
              <RadioGroupItem value={calcMethod.id} id={`method-${calcMethod.id}`} className="mt-1" />
              <div className="grid gap-1.5">
                <Label htmlFor={`method-${calcMethod.id}`} className="font-medium">
                  {calcMethod.name}
                </Label>
                <p className="text-sm text-muted-foreground">{calcMethod.description}</p>
              </div>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  )
}
