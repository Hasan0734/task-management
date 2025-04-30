"use client";
import React, { useMemo, useState } from "react";
import AddNewList from "./AddNewList";
import { Card } from "../ui/card";
import BoardItem from "./BoardItem";
import { Column, Id } from "@/lib/types";
import { generateId } from "@/lib/utils";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
} from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { createPortal } from "react-dom";

const BoardDetails = () => {
  const [items, setItems] = useState<Column[]>([]);
  const columnId = useMemo(() => items.map((item) => item.id), [items]);
  const [activeColumn, setActiveColumn] = useState<Column | null>();

  const handleAddItem = (newItem: string) => {
    const column: Column = {
      id: generateId(),
      title: newItem,
    };
    setItems((prevItems) => [...prevItems, column]);
  };

  const deleteColumn = (id: Id) => {
    const filteredColumns = items.filter((item) => item.id !== id);
    setItems(filteredColumns);
  };

  const onDragStart = (event: DragStartEvent) => {
    if (event.active.data.current?.type === "Column") {
      setActiveColumn(event.active.data.current?.column);
      return;
    }
  };

  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;
    const activeColumnId = active.id;
    const overColumnId = over.id;
    if (activeColumnId === overColumnId) return;

    setItems((items) => {
      const activeColumnIndex = items.findIndex(
        (item) => item.id === activeColumnId
      );
      const overColumnIndex = items.findIndex(
        (item) => item.id === overColumnId
      );

      return arrayMove(items, activeColumnIndex, overColumnIndex)
    });
    
  };

  return (
    <Card className="bg-orange-500 p-4">
      <div className="overflow-hidden w-full">
        <DndContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
          <div className="flex gap-5 items-start min-h-[650px] w-full">
            <SortableContext items={columnId}>
              {items.map((item: Column, i) => (
                <BoardItem key={i} item={item} deleteColumn={deleteColumn} />
              ))}
            </SortableContext>

            <AddNewList handleAddItem={handleAddItem} />
          </div>
          {createPortal(
            <DragOverlay>
              {activeColumn && (
                <BoardItem item={activeColumn} deleteColumn={deleteColumn} />
              )}
            </DragOverlay>,
            document.body
          )}
        </DndContext>
      </div>
    </Card>
  );
};

export default BoardDetails;
