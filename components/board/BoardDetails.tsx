"use client";
import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import AddNewList from "./AddNewList";
import { Card } from "../ui/card";
import BoardItem from "./BoardItem";
import Draggable from "../Draggable";
import Droppable from "../Droppable";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

const BoardDetails = () => {
  const [items, setItems] = useState<string[]>([]);

  const handleAddItem = (newItem: string) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const containers = ["A", "B", "C"];
  const [isDropped, setIsDropped] = useState(false);
  const [parent, setParent] = useState(null);
  const draggableMarkup = <Draggable>Drag me</Draggable>;

  function handleDragEnd(event: any) {
    if (event.over && event.over.id === "droppable") {
      setIsDropped(true);
    }
  }
  return (
    <DndContext>
      <Card className="bg-orange-500 p-4">
        <div className="overflow-hidden w-full">
          <ScrollArea className="h-[700px] w-screen overflow-x-hidden overflow-y-auto  rounded-md border relative">
            <div className="flex  gap-5 items-start min-h-[650px]">
              {items.map((item, i) => (
                <BoardItem key={i} item={item} />
              ))}
              <AddNewList handleAddItem={handleAddItem} />
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </Card>
    </DndContext>
  );
};

export default BoardDetails;
