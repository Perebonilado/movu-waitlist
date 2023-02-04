import React, { FC } from "react";
import Image from "next/image";

import Container from "../../ui/container";
import { TextField } from "../../ui/Input";
import Button from "../../ui/button";

const CreatorSignupBox: FC = () => {
  return (
    <Container>
      <div className="flex justify-between h-screen  px-20 max-lg:px-0 max-md:flex-col">
        <div className="flex-1">
          <h1 className="text-4xl font-extrabold mb-5 max-md:text-center">
            Want to be a <span className="text-[#7164E6]">Creator</span> on
            movu?
          </h1>
          <p className="text-[#C1C1C1] mb-5 max-md:text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            facere aspernatur assumenda nulla deleniti quasi aliquam quas
            perspiciatis officia. Vitae ipsam neque temporibus ducimus quia?
          </p>
          <div className="max-md:flex max-md:justify-center max-md:mt-10  max-sm:flex-col max-sm:gap-y-6">
            <TextField
              className="w-72 !rounded-tr-none !rounded-br-none max-lg:w-56 max-md:w-80 max-sm:w-full max-sm:!rounded-tr-md max-sm:!rounded-br-md"
              placeholder="Email address"
              size="lg"
            />
            <Button
              text="Sign up"
              className="!rounded-tl-none !rounded-bl-none !font-semibold max-sm:!rounded-tl-md max-sm:!rounded-bl-md"
              size="lg"
            />
          </div>
        </div>
        <div className="flex-1 h-full flex justify-center items-center p-4">
          <div className="relative w-full h-full max-w-sm max-sm:mt-14 xl:max-w-xl">
            <Image
              src={
                "https://res.cloudinary.com/dt0wfaxft/image/upload/v1675433192/Pro_Display_XDR_Front_View_Mockup_ferj0r.png"
              }
              alt={"illustration"}
              fill={true}
              style={{ objectFit: "contain", objectPosition: "50% 0" }}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CreatorSignupBox;
