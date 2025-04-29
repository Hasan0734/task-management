"use client";
import React, { useState } from "react";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { tailwindColors } from "@/lib/color";
import { toast } from "sonner";

const FormSchema = z.object({
  bg_color: z.string({
    required_error: "Please select a language.",
  }),
  title: z.string({ required_error: "Board title is required!" }),
});

const CreateBoard = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    toast("Event has been created", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    });
  }

  return (
    <DialogContent className="sm:max-w-[425px]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Create board</DialogTitle>
            <div className="flex items-center justify-center mt-3">
              <div
                style={{ background: form.watch().bg_color }}
                className="w-[200px] h-[120px] rounded-sm flex items-center justify-center"
              >
                <Image
                  width={185}
                  height={110}
                  src={"/assets/layout.svg"}
                  alt="board layout"
                />
              </div>
            </div>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <FormField
              control={form.control}
              name="bg_color"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Bg Color</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select bg color" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="w-full">
                      {tailwindColors.map((family, i) => (
                        <SelectGroup key={i}>
                          <SelectLabel className="capitalize text-md flex border-b">
                            {family.name}
                          </SelectLabel>
                          {family.values.map((color, index) => (
                            <SelectItem
                              key={index}
                              value={color.value}
                              className="flex items-center justify-between w-full"
                            >
                              {family.name}-{color.name}
                              <div
                                className="h-4 w-4 rounded-sm"
                                style={{ backgroundColor: color.value }}
                              />
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    This is the language that will be used in the dashboard.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Board Title</FormLabel>
                  <Input {...field} value={field.value} />
                </FormItem>
              )}
            />
          </div>
          <DialogFooter>
            <Button type="submit">Create</Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  );
};

export default CreateBoard;
