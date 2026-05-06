"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverAnchor,
} from "@/components/ui/popover";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

const options = [
  { label: "Dubai", value: "dubai" },
  { label: "London", value: "london" },
  { label: "New York", value: "new-york" },
  { label: "Tokyo", value: "tokyo" },
];

export function Autocomplete() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [input, setInput] = React.useState("");

  const filtered = options.filter((item) =>
    item.label.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverAnchor asChild>
        <div className="relative w-full">
          <Input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setOpen(true);
            }}
            onFocus={() => setOpen(true)}
            placeholder="Search city..."
            className="pr-8"
          />
          <ChevronsUpDown className="absolute right-2 top-2.5 h-4 w-4 opacity-50" />
        </div>
      </PopoverAnchor>

      <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {filtered.length === 0 && (
                <div className="p-2 text-sm text-muted-foreground">
                  Nothing found
                </div>
              )}

              {filtered.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.label}
                  onSelect={() => {
                    setValue(item.value);
                    setInput(item.label);
                    setOpen(false);
                  }}
                >
                  {item.label}
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === item.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}