import { User } from "lucide-react";
import BoardCard from "./BoardCard";
import { Card, CardContent } from "../ui/card";
import { Dialog, DialogTrigger } from "../ui/dialog";
import CreateBoard from "./CreateBoard";

const YourBoards = () => {
  const boards = [1, 2, 3, 4];

  return (
    <div>
      <div className="flex items-center gap-2">
        <User /> <h3>Your boards</h3>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-4">
        {boards.map((board, i) => (
          <BoardCard  key={i}/>
        ))}
        <Dialog>
          <DialogTrigger asChild>
            <Card className="h-[162px] flex items-center justify-center hover:bg-gray-200 cursor-pointer">
              <CardContent className="text-center text-xl">
                Create new board
              </CardContent>
            </Card>
          </DialogTrigger>
          <CreateBoard />
        </Dialog>
      </div>
    </div>
  );
};

export default YourBoards;
