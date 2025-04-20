import PrayerCalculationSettings from "@/components/prayer-calculation-settings"
import MadhabSettings from "@/components/madhab-settings"
import ManualAdjustments from "@/components/manual-adjustments"

export default function PrayerSettingsPage() {
    return (
    <main className="container mx-auto p-4 space-y-6 max-w-3xl">
        <h1 className="text-3xl font-bold">Prayer Time Settings</h1>

        <div className="space-y-8">
        <PrayerCalculationSettings />
        <MadhabSettings />
        <ManualAdjustments />
        </div>
    </main>
    )
}
