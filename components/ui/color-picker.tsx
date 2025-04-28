"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { tailwindColors } from "@/lib/color";

interface Color {
  name: string;
  value: string;
}

interface ColorFamily {
  name: String;
  values: Color[];
}

interface ColorPickerTypes {
  onChange: (color: any) => void;
}

export function ColorPicker({ onChange }: ColorPickerTypes) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [searchQuery, setSearchQuery] = React.useState("");

  // Flatten the tailwindColors array for easier searching and display
  const flatColors: any[] = React.useMemo(
    () =>
      tailwindColors.flatMap((family: ColorFamily) =>
        family.values.map((color) => ({
          value: color.value,
          label: `${family.name}-${color.name}`, // e.g., "slate-50"
          family: family.name,
          shade: color.name,
        }))
      ),
    [tailwindColors]
  );

  const selectedColor = flatColors.find((color) => color.value === value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {selectedColor ? selectedColor.label : "Select a background color..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput
            placeholder="Search background..."
            onValueChange={setSearchQuery}
          />
          <CommandList>
            <CommandEmpty>No color found.</CommandEmpty>
            {tailwindColors.map((family: ColorFamily, i: number) => (
              <CommandGroup key={i} heading={family.name}>
                {family.values.map((color) => (
                  <CommandItem
                    key={color.value}
                    value={color.value}
                    onSelect={(currentValue: React.SetStateAction<string>) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                      onChange(currentValue);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === color.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {family.name}-{color.name}
                    <div
                      className="ml-auto h-4 w-4 rounded-sm"
                      style={{ backgroundColor: color.value }}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
