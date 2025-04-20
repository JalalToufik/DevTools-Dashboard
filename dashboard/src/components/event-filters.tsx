"use client"

import { useState } from "react"
import { Check, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { cn } from "@/lib/utils"

export default function EventFilters() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  const eventTypes = [
    { value: "lecture", label: "Lecture" },
    { value: "quran", label: "Quran Study" },
    { value: "iftar", label: "Iftar" },
    { value: "fundraiser", label: "Fundraiser" },
    { value: "community", label: "Community Event" },
    { value: "class", label: "Islamic Class" },
  ]

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <div className="relative flex-1">
        <Input placeholder="Search events..." />
      </div>

      <div className="flex gap-2">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" role="combobox" aria-expanded={open} className="justify-between min-w-[150px]">
              {value ? eventTypes.find((type) => type.value === value)?.label : "Event Type"}
              <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search event type..." />
              <CommandList>
                <CommandEmpty>No event type found.</CommandEmpty>
                <CommandGroup>
                  {eventTypes.map((type) => (
                    <CommandItem
                      key={type.value}
                      value={type.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue)
                        setOpen(false)
                      }}
                    >
                      <Check className={cn("mr-2 h-4 w-4", value === type.value ? "opacity-100" : "opacity-0")} />
                      {type.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        <Button variant="outline">
          Location
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </div>
    </div>
  )
}
