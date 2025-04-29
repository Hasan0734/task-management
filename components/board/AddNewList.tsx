import React, { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { PlusIcon, XIcon } from "lucide-react";
import { Input } from "../ui/input";

const AddNewList = () => {
  const [addNew, setAddNew] = useState(false);
  const [listName, setListName] = useState('')

  return (
    <div className="max-w-[272px]">
      {!addNew && (
        <Button
          onClick={() => setAddNew(true)}
          variant={"secondary"}
          className="w-full justify-start cursor-pointer"
        >
          <PlusIcon /> Add a list
        </Button>
      )}
      {addNew && (
        <Card className="bg-primary py-0">
          <CardContent className="p-2 space-y-2">
            <Input onChange={(e) => setListName(e.target.value)} placeholder="Enter list name..." />
            <div className="flex items-center gap-1">
              <Button
                className="bg-blue-500 hover:bg-blue-600 cursor-pointer"
                variant={"default"}
              >
                Add list
              </Button>
              <Button
                onClick={() => setAddNew(false)}
                variant={"outline"}
                size={"icon"}
              >
                <XIcon className="" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AddNewList;
