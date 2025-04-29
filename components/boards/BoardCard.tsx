import React from "react";
import { Card,  CardTitle } from "@/components/ui/card";
import Link from "next/link";

const BoardCard = () => {
  return (
    <Link href={'/'}>
    <Card className="p-0 pb-3 overflow-hidden gap-3">
      <div className="h-20 bg-green-500"></div>
      <CardTitle className="text-lg px-3 line-clamp-2 font-medium!">Untitled Board</CardTitle>
    </Card>
    </Link>

  );
};

export default BoardCard;
