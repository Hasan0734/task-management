import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { PlusIcon, XIcon } from "lucide-react";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { toast } from "sonner";
import useOutsideClick from "@/lib/outsideClickHandle";

interface PropsType {
  handleAddItem: (title: string) => void;
}

const AddNewList = ({ handleAddItem }: PropsType) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [listName, setListName] = useState("");

  const handleOutsideClick = () => {
    setModalOpen(false);
  };

  const ref = useOutsideClick(handleOutsideClick);

  const handlePopover = () => {

    setModalOpen(true);
  };

  const hanldClose = () => {
    setModalOpen(false);
  };

  const handleAdd = () => {
    if (!listName) {
      return;
    }
    handleAddItem(listName);
    setListName("");
  };

  return (
    <div ref={ref} className="min-w-[272px] rounded-md overflow-hidden">
      {modalOpen ? (
        <div className=" p-2 bg-primary space-y-3 border-0 min-w-[272px]">
          <Input
            autoFocus={true}
            className="text-white"
            value={listName}
            onChange={(e) => setListName(e.target.value)}
            placeholder="Enter list name..."
          />
          <div className="flex items-center gap-1">
            <Button
              onClick={handleAdd}
              className="bg-blue-500 hover:bg-blue-600 cursor-pointer"
              variant={"default"}
            >
              Add list
            </Button>
            <Button onClick={hanldClose} variant={"outline"} size={"icon"}>
              <XIcon className="" />
            </Button>
          </div>
        </div>
      ) : (
        <Button
          onClick={handlePopover}
          variant={"secondary"}
          className="w-full justify-start cursor-pointer"
        >
          <PlusIcon /> Add a list
        </Button>
      )}
    </div>
  );
};

export default AddNewList;
