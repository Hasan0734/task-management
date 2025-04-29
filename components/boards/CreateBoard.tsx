"use client";
import React, { useState } from "react";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";
import { ColorPicker } from "../ui/color-picker";
import { Form, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from "@/hooks/use-toast";


const FormSchema = z.object({
  language: z.string({
    required_error: "Please select a language.",
  }),
})

const CreateBoard = () => {
  const [color, setColor] = useState("");

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  const handleColorChange = (color: string) => {
    console.log("Selected color:", color);
    // Do something with the selected color value
    setColor(color);
  };


  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }
 

  return (
    <DialogContent className="sm:max-w-[425px]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>

      <DialogHeader>
        <DialogTitle>Create board</DialogTitle>
        <DialogDescription className="flex items-center justify-center mt-3">
          <div
            style={{ background: color }}
            className="w-[200px] h-[120px] rounded-sm flex items-center justify-center"
          >
            <Image
              width={185}
              height={110}
              src={"/assets/layout.svg"}
              alt="board layout"
            />
          </div>
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">

      <FormField
          control={form.control}
          name="language"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Language</FormLabel>
              <ColorPicker field={field} form={form} />
              <FormDescription>
                This is the language that will be used in the dashboard.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
       
        <div className="space-y-2">
          <Label htmlFor="title">
            Board title <span className="text-red-500">*</span>
          </Label>
          <Input id="title" value="Untitled" />
          <p className="text-base">👋 Board title required!</p>
        </div>
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
