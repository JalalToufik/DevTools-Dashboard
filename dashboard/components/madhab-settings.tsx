"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function MadhabSettings() {
  const [madhab, setMadhab] = useState("shafi")

  return (
    <Card>
      <CardHeader>
        <CardTitle>Asr Calculation (Madhab)</CardTitle>
        <CardDescription>Choose the juristic method for calculating Asr prayer time</CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup value={madhab} onValueChange={setMadhab} className="space-y-4">
          <div className="flex items-start space-x-2">
            <RadioGroupItem value="shafi" id="madhab-shafi" className="mt-1" />
            <div className="grid gap-1.5">
              <Label htmlFor="madhab-shafi" className="font-medium">
                Shafi'i, Maliki, Hanbali
              </Label>
              <p className="text-sm text-muted-foreground">Asr begins when an object's shadow equals its height</p>
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <RadioGroupItem value="hanafi" id="madhab-hanafi" className="mt-1" />
            <div className="grid gap-1.5">
              <Label htmlFor="madhab-hanafi" className="font-medium">
                Hanafi
              </Label>
              <p className="text-sm text-muted-foreground">
                Asr begins when an object's shadow equals twice its height
              </p>
            </div>
          </div>
        </RadioGroup>
      </CardContent>
    </Card>
  )
}
