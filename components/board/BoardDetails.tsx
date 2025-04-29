"use client";
import React, { useState } from "react";

import AddNewList from "./AddNewList";
import { Card } from "../ui/card";
import BoardItem from "./BoardItem";

const BoardDetails = () => {
  const [items, setItems] = useState<string[]>([]);

  const handleAddItem = (newItem: string) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

 

  return (
    <Card className="bg-orange-500 min-h-dvh p-4">
      <div className="grid grid-cols-5 gap-5 items-start">
        {items.map(item => <BoardItem item={item} />)}
        <AddNewList handleAddItem={handleAddItem} />
      </div>
    </Card>
  );
};

export default BoardDetails;
