"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { EllipsisIcon, PlusIcon, XIcon } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

const BoardItem = ({ item }: { item: string }) => {
  const [addNew, setAddNew] = useState(false);
  const [value, setValue] = useState("");
  const [cards, setCards] = useState<string[]>([]);
  const [editTitle, setEditTitle] = useState(false);

  const handleAddCard = () => {
    if (!value) return;
    setCards((prevCards) => [...prevCards, value]);
    setValue("");
  };

  return (
    <Card className=" p-2 bg-primary space-y-3 border-0 rounded-md">
      <CardContent className="p-0 space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <Input
              
              onFocus={() => setEditTitle(true)}
              onBlur={() => setEditTitle(false)}
              readOnly={!editTitle}
              className={cn("text-white text-lg border-0", {
                border: editTitle,
              })}
              value={item}
            />
          </div>
          <button className="text-white">
            <EllipsisIcon />
          </button>
        </div>
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
      </CardContent>
    </Card>
  );
};

export default BoardItem;
