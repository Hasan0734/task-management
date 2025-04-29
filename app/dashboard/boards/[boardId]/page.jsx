import BoardDetails from "@/components/board/BoardDetails";
import React from "react";

const BoardsPage = () => {
  return (
    <div className="">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">
        Untitled board
        </h1>
        <p className="text-gray-500">
          Manage your projects and tasks in one place
        </p>
      </header>
        <BoardDetails/>
    </div>
  );
};

export default BoardsPage;
