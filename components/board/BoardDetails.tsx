"use client";
import React from "react";

import AddNewList from "./AddNewList";
import { Card } from "../ui/card";

const BoardDetails = () => {

  return (
    <Card className="bg-orange-500 h-dvh p-4">
      
      <AddNewList/>
    </Card>
  );
};

export default BoardDetails;
