"use client"

import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"
import { useRouter } from "next/navigation"

export default function NearbyMosqueButton() {
  const router = useRouter()

  const handleFindMosque = () => {
    // In a real app, this would get the user's location first
    router.push("/mosques")
  }

  return (
    <Button onClick={handleFindMosque} className="w-full" size="lg">
      <MapPin className="mr-2 h-5 w-5" />
      Find Next Mosque Nearby
    </Button>
  )
}
