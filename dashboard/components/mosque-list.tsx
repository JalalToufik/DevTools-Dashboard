"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Phone, Star } from "lucide-react"
import { getMosques } from "@/lib/mosque-data"

export default function MosqueList() {
  const [mosques, setMosques] = useState<any[]>([])

  useEffect(() => {
    // In a real app, this would fetch from an API
    const data = getMosques()
    setMosques(data)
  }, [])

  return (
    <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
      <h2 className="text-xl font-semibold">Nearby Mosques</h2>

      {mosques.map((mosque) => (
        <Card key={mosque.id} className="hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <h3 className="font-medium text-lg">{mosque.name}</h3>
              <Badge variant="outline" className="flex items-center">
                <Star className="h-3 w-3 mr-1 fill-yellow-400 stroke-yellow-400" />
                {mosque.rating}
              </Badge>
            </div>

            <div className="mt-2 space-y-2 text-sm">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 text-muted-foreground shrink-0 mt-0.5" />
                <span>{mosque.address}</span>
              </div>

              <div className="flex items-start">
                <Clock className="h-4 w-4 mr-2 text-muted-foreground shrink-0 mt-0.5" />
                <div>
                  <p>
                    <strong>Jummah:</strong> {mosque.jummahTime}
                  </p>
                  <p className="text-muted-foreground">{mosque.openingHours}</p>
                </div>
              </div>

              {mosque.phone && (
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{mosque.phone}</span>
                </div>
              )}
            </div>

            <div className="mt-3 flex flex-wrap gap-1">
              {mosque.tags.map((tag: string) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
