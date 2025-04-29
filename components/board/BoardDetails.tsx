"use client";
import React, { useState } from "react";

import AddNewList from "./AddNewList";
import { Card } from "../ui/card";

const BoardDetails = () => {
  const [items, setItems] = useState<string[]>([]);

  const handleAddItem = (newItem: string) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <Card className="bg-orange-500 h-dvh p-4">
      <AddNewList/>
    </Card>
  );
};

export default BoardDetails;
