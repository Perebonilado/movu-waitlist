import React, { FC } from "react";
import Image from "next/image";

import Container from "../../ui/container";
import { TextField } from "../../ui/Input";
import Button from "../../ui/button";

const CreatorSignupBox: FC = () => {
  return (
    <Container>
      <div className="flex justify-between h-screen items-center px-20">
        <div className="flex-1">
          <h1 className="text-4xl font-extrabold mb-5">
            Want to be a <span className="text-[#7164E6]">Creator</span> on
            movu?
          </h1>
          <p className="text-[#C1C1C1] mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            facere aspernatur assumenda nulla deleniti quasi aliquam quas
            perspiciatis officia. Vitae ipsam neque temporibus ducimus quia?
          </p>
          <div>
            <TextField
              className="w-80 !rounded-tr-none !rounded-br-none"
              placeholder="Email address"
              size="lg"
            />
            <Button
              text="Sign up"
              className="!rounded-tl-none !rounded-bl-none !font-semibold"
              size="lg"
            />
          </div>
        </div>
        <div className="flex-1 h-full flex justify-center items-center p-6">
          <div className="relative w-8/12 h-4/5 max-w-sm">
            <Image
              src={
                "https://res.cloudinary.com/dt0wfaxft/image/upload/v1675433192/Pro_Display_XDR_Front_View_Mockup_ferj0r.png"
              }
              alt={"illustration"}
              fill={true}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CreatorSignupBox;
