"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, MapPin, Calendar, Settings } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Today", icon: Home },
    { href: "/mosques", label: "Mosques", icon: MapPin },
    { href: "/events", label: "Events", icon: Calendar },
    { href: "/settings/prayer-times", label: "Settings", icon: Settings },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t">
      <nav className="container mx-auto">
        <ul className="flex justify-around">
          {navItems.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)

            return (
              <li key={item.href} className="flex-1">
                <Link
                  href={item.href}
                  className={cn(
                    "flex flex-col items-center py-3 text-xs",
                    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <item.icon className="h-5 w-5 mb-1" />
                  <span>{item.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
