import * as React from "react";

import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Clock, Heart, Star } from "lucide-react";
export function PartnerCard() {
  return (
    <div className="p-2  rounded-xl shadow-md">
      <div className="relative min-h-3 max-h-44  max-w-96 ">
        <Card className="rounded-xl  max-h-36  overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="/imgs/test.webp"
            alt="naguara"
          />
        </Card>
        <Avatar className="absolute z-10 bottom-[-15px] left-3">
          <AvatarImage src="https://github.com/shadcn.png" alt="" />
        </Avatar>
        <Heart className="absolute z-10 top-1 right-3  cursor-pointer overflow-hidden stroke-white stroke-[3px] hover:stroke-black" />
      </div>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-md">Naguara Sport Bar </span> 4.5
      </div>
      <div className="flex items-center gap-3">
        <Clock className="stroke-gray-400" />
        <span className="text-sm text-gray-400">10 min </span>
      </div>
    </div>
  );
}
