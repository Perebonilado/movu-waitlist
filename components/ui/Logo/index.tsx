import React, { FC } from "react";
import Image from "next/image";

const Logo: FC = () => {
  return (
    <div className="flex flex-row justify-center items-center cursor-pointer">
      {" "}
      <Image
        src="https://res.cloudinary.com/dbbpapuyc/image/upload/v1660558217/movu/web-assets/Group_69_1.png"
        alt="Movu"
        quality={100}
        priority
        width={34}
        height={34}
      />
      <h1 className="text-white pl-3 font-bold text-3xl tracking-wide">movu</h1>
    </div>
  );
};

export default Logo;
