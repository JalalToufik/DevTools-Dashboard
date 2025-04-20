import MosqueMap from "@/components/mosque-map"
import MosqueList from "@/components/mosque-list"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function MosquesPage() {
    return (
    <main className="container mx-auto p-4 space-y-6">
        <h1 className="text-3xl font-bold">Nearby Mosques</h1>

        <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search mosques..." className="pl-10" />
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
            <MosqueMap />
        </div>
        <div>
            <MosqueList />
        </div>
        </div>
    </main>
    )
}
