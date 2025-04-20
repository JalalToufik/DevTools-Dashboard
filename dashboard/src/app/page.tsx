import PrayerTimesCard from "@/components/prayer-times-card"
import QiblaCompass from "@/components/qibla-compass"
import NearbyMosqueButton from "@/components/nearby-mosque-button"
import { ModeToggle } from "@/components/mode-toggle"

export default function Home() {
  return (
    <main className="container mx-auto p-4 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Today</h1>
        <ModeToggle />
      </div>

      <PrayerTimesCard />

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-card rounded-lg p-6 border shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Qibla Direction</h2>
          <QiblaCompass />
        </div>

        <div className="bg-card rounded-lg p-6 border shadow-sm flex flex-col justify-between">
          <h2 className="text-xl font-semibold mb-4">Find a Mosque</h2>
          <p className="text-muted-foreground mb-4">Discover the nearest mosque for your next prayer.</p>
          <NearbyMosqueButton />
        </div>
      </div>
    </main>
  )
}
