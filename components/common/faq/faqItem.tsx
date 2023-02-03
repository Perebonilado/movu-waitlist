import React, { FC, useState } from "react";
import Plus from "@/components/icons/Plus";
import Minus from "@/components/icons/Minus";

interface Props {
  title: string;
  body: string;
  id: string;
}

const FaqItem: FC<Props> = ({ title, body }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center pb-6 pt-6 :first-child:pt-0 :last-child:pb-0">
        <h3 className="font-semibold">{title}</h3>
        <i
          className="cursor-pointer border-2 rounded-full"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <Minus className="w-4 h-4 stroke-2" />
          ) : (
            <Plus className="w-4 h-4 stroke-2" />
          )}
        </i>
      </div>

      <div
        className={`border-b border-[#747474] overflow-hidden transition-all ease-in-out duration-500 text-sm
        ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <p className="text-[#B7B7B7] pb-6 w-full max-w-xl">{body}</p>
      </div>
    </div>
  );
};

export default FaqItem;
