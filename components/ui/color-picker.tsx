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
import { FormControl } from "./form";
import { ScrollArea } from "@radix-ui/react-scroll-area";

interface ColorPickerTypes {
  field: {
    value: string;
  };
  form: any;
}

export function ColorPicker({ field, form }: ColorPickerTypes) {
  const selectedColor = React.useMemo(() => {
    for (const family of tailwindColors) {
      const found = family.values.find((color) => color.value === field.value);
      if (found) return { ...found, family: family.name };
    }
    return null;
  }, [field.value]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <FormControl>
          <Button
            variant="outline"
            role="combobox"
            className={cn(
              "w-[200px] justify-between",
              !field.value && "text-muted-foreground"
            )}
          >
            {selectedColor
              ? `${selectedColor.family}-${selectedColor.name}`
              : "Select color"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search color..." />
          <ScrollArea className="h-72 w-48 rounded-md border">
            
          <CommandList >
           
            <CommandEmpty>No color found.</CommandEmpty>
            {tailwindColors.map((family) => (
              <CommandGroup className="capitalize" heading={family.name} key={family.name}>
                {family.values.map((color) => (
                  <CommandItem
                    value={color.value}
                    key={color.value}
                    onSelect={() => {
                      form.setValue("bg_color", color.value);
                    }}
                    className="flex items-center justify-between ml-3"
                  >
                    {family.name}-{color.name}
                    <div className="flex items-center gap-2 ml-auto">
                      <div
                        className="h-4 w-4 rounded-sm"
                        style={{ backgroundColor: color.value }}
                      />
                      {color.value === field.value && (
                        <Check className="h-4 w-4" />
                      )}
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
          </ScrollArea>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
