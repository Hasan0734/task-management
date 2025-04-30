"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { EllipsisIcon, GripIcon, PlusIcon, XIcon } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { Column, Id } from "@/lib/types";
import { ScrollArea } from "../ui/scroll-area";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useSmartClickDrag } from "@/lib/useSmartClickDrag";

interface Props {
  item: Column;
  deleteColumn: (id: Id) => void;
}

const BoardItem = ({ item, deleteColumn }: Props) => {
  const [addNew, setAddNew] = useState(false);
  const [value, setValue] = useState("");
  const [cards, setCards] = useState<string[]>([]);
  const [editTitle, setEditTitle] = useState(false);
  const [itemTitle, setItemTitle] = useState(item);

  const handleAddCard = () => {
    if (!value) return;

    setCards((prevCards) => [...prevCards, value]);
    setValue("");
  };

  const handleChangeTitle = (e: any) => {
    console.log("helo");
    setEditTitle(false);
    const title = e.target.value.trim();

    if (title && item.title !== title) {
      setItemTitle({ id: item.id, title });
      return;
    }
    setItemTitle(item);
  };

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: item.id,
    data: {
      type: "Column",
      column: item,
    },
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="min-w-[272px] max-w-[272px] p-2 bg-primary space-y-3  rounded-md h-[485px] opacity-60 border-2 border-gray-300"
      ></div>
    );
  }

  return (
    <Card
      ref={setNodeRef}
      style={style}
      className="min-w-[272px] max-w-[272px] p-2 bg-primary space-y-3 border-0 rounded-md"
    >
      <CardContent className="p-0  w-full">
        {/* title */}
        <div
          {...attributes}
          className="flex items-center justify-between gap-3 bg-gray-700/20 p-1 px-2 rounded-md group"
        >
          <div className="flex gap-3 items-center overflow-hidden">
            <div className="group-hover:ml-0 -ml-6  transition duration-200 cursor-grab bg-gray-500 p-1 rounded" {...listeners}>
              <GripIcon className="size-4" />
            </div>

            {editTitle ? (
              <Input
                autoFocus
                onBlurCapture={handleChangeTitle}
                className={cn("text-white text-lg")}
                defaultValue={itemTitle.title}
              />
            ) : (
              <h3 className="text-white text-lg w-full">{itemTitle.title}</h3>
            )}
          </div>

          <button
            onClick={() => deleteColumn(item.id)}
            className="text-white z-30"
          >
            <EllipsisIcon />
          </button>
        </div>
        {/* tasks */}
        <ScrollArea className="h-[420px] w-full space-y-2 mt-3">
          <div className="space-y-2">
            {cards.map((cd, i) => (
              <Card
                key={i}
                className="bg-gray-700/50 p-1 px-2 rounded-sm border-0"
              >
                <h3 className="text-white text-base">{cd}</h3>
              </Card>
            ))}
            <div className="">
              {addNew ? (
                <div className="space-y-2">
                  <Textarea
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="bg-gray-700/50 border-0 text-white resize-none rounded-sm"
                  />
                  <div className="flex items-center gap-1">
                    <Button
                      onClick={handleAddCard}
                      className="bg-blue-500 hover:bg-blue-600 cursor-pointer"
                      variant={"default"}
                    >
                      Add card
                    </Button>
                    <Button
                      onClick={() => setAddNew(false)}
                      variant={"outline"}
                      size={"icon"}
                    >
                      <XIcon className="" />
                    </Button>
                  </div>
                </div>
              ) : (
                <Button
                  onClick={() => setAddNew(true)}
                  className=" cursor-pointer text-white"
                  variant={"ghost"}
                >
                  <PlusIcon />
                  Add a card
                </Button>
              )}
            </div>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default BoardItem;
