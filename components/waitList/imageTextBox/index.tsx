import React, { FC } from "react";
import Image from "next/image";

interface Props {
  title: string;
  body: string;
  imageUrl: string;
}

const ImageTextBox: FC<Props> = ({ title, body, imageUrl }) => {
  return (
    <div className="flex odd:flex-row even:flex-row-reverse h-screen gap-14 
    max-md:even:flex-col max-md:odd:flex-col max-md:gap-y-4 
    ">
      <div className="w-[50%] py-10 pt-16 max-lg:py-10 max-md:w-full">
        <h2 className="text-3xl font-bold mb-6 max-md:text-center">{title}</h2>
        <p className="text-[#C1C1C1] max-md:text-center">{body}</p>
      </div>
      <div className="w-[50%] h-full max-lg:px-4 max-md:w-full max-md:flex max-md:justify-center">
        <div className="relative w-full h-full max-w-[500px] mx-auto">
          <Image
            src={imageUrl}
            alt={title}
            fill={true}
            style={{ objectFit: "contain",  objectPosition: "0% 0%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageTextBox;
