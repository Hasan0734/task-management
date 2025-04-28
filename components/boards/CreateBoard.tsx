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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { ColorPicker } from "../ui/color-picker";
import { toast } from "@/hooks/use-toast";

const CreateBoard = () => {
  const [color, setColor] = useState("");

  const handleColorChange = (color: string) => {
    console.log("Selected color:", color);
    // Do something with the selected color value
    setColor(color);
  };


  const handleSubmit = () => {
    
  }

  return (
    <DialogContent className="sm:max-w-[425px]">
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
        <div>
          <ColorPicker onChange={handleColorChange} />
        </div>
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
    </DialogContent>
  );
};

export default CreateBoard;
