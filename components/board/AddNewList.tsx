import React, { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { PlusIcon, XIcon } from "lucide-react";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const AddNewList = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [listName, setListName] = useState("");

  const handlePopover = (open: boolean) => {
    setModalOpen(open);
  };

  const hanldClose = () => {
    setModalOpen(false);
  };
  return (
    <Popover open={modalOpen} onOpenChange={handlePopover}>
      <div className="max-w-[272px]">
        <PopoverTrigger className="w-full" asChild>
          <Button
            variant={"secondary"}
            className="w-full justify-start cursor-pointer"
          >
            <PlusIcon /> Add a list
          </Button>
        </PopoverTrigger>
      </div>

      <PopoverContent
        sideOffset={-36}
        className="w-[272px] p-2 bg-primary space-y-3 border-0 -top-10"
      >
        <Input
          onChange={(e) => setListName(e.target.value)}
          placeholder="Enter list name..."
        />
        <div className="flex items-center gap-1">
          <Button
            className="bg-blue-500 hover:bg-blue-600 cursor-pointer"
            variant={"default"}
          >
            Add list
          </Button>
          <Button onClick={hanldClose} variant={"outline"} size={"icon"}>
            <XIcon className="" />
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default AddNewList;
