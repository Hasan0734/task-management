"use client";
import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import AddNewList from "./AddNewList";
import { Card } from "../ui/card";
import BoardItem from "./BoardItem";
import Draggable from "../Draggable";
import Droppable from "../Droppable";

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
      <Card className="bg-orange-500 min-h-dvh p-4 overflow-hidden">
        {parent === null ? draggableMarkup : null}

        {containers.map((id) => (
          // We updated the Droppable component so it would accept an `id`
          // prop and pass it to `useDroppable`
          <Droppable key={id} id={id}>
            {parent === id ? draggableMarkup : "Drop here"}
          </Droppable>
        ))}

        <div className="grid grid-cols-5 gap-5 items-start">
          {items.map((item, i) => (
            <BoardItem key={i} item={item} />
          ))}
          <AddNewList handleAddItem={handleAddItem} />
        </div>
      </Card>
    </DndContext>
  );
};

export default BoardDetails;
