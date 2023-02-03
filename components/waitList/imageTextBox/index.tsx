import React, { FC } from "react";
import Image from "next/image";

interface Props {
  title: string;
  body: string;
  imageUrl: string;
}

const ImageTextBox: FC<Props> = ({ title, body, imageUrl }) => {
  return (
    <div className="flex odd:flex-row even:flex-row-reverse h-screeng gap-14">
      <div className="w-1/2 py-10 pt-16">
        <h2 className="text-3xl font-bold mb-6">{title}</h2>
        <p className="text-[#C1C1C1]">{body}</p>
      </div>
      <div className="w-1/2 h-full px-14">
        <div className="relative w-full h-full max-w-sm">
          <Image
            src={imageUrl}
            alt={title}
            width={1000}
            height={1000}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageTextBox;
