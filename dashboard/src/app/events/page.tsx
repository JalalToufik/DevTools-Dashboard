import EventCalendar from "@/components/event-calendar"
import EventFilters from "@/components/event-filters"
import EventList from "@/components/event-list"

export default function EventsPage() {
    return (
    <main className="container mx-auto p-4 space-y-6">
        <h1 className="text-3xl font-bold">Mosque Events</h1>

        <EventFilters />

        <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
            <EventCalendar />
        </div>
        <div className="lg:col-span-2">
            <EventList />
        </div>
        </div>
    </main>
    )
}
