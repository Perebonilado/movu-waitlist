import React, { FC } from "react";
import Container from "@/components/ui/container";
import Link from "next/link";
import Image from "next/image";

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <div className="px-20 pt-24 pb-12 max-md:px-0">
        <div className="flex justify-between gap-24 flex-wrap max-md:gap-x-10 max-sm:flex-col max-sm:items-center">
          <div className="flex-1 max-w-xs max-md:max-w-sm max-sm:text-center">
            <h4 className="font-semibold mb-5">ABOUT</h4>
            <p className="text-[#C1C1C1] text-sm">
              Movu africa ia a streaming site that helps film maker upload their
              content and helps them get paid.
            </p>
          </div>

          <div className="flex-1 max-w-xs max-md:max-w-sm max-sm:text-center">
            <h4 className="font-semibold mb-5">PRODUCT</h4>
            <Link
              href={""}
              className="text-[#C1C1C1] text-sm mb-3 block cursor-pointer"
            >
              Features
            </Link>
            <Link
              href={""}
              className="text-[#C1C1C1] text-sm mb-3 block cursor-pointer"
            >
              Feedbacks
            </Link>
            <Link
              href={""}
              className="text-[#C1C1C1] text-sm mb-3 block cursor-pointer"
            >
              Tech Support
            </Link>
          </div>

          <div className="flex-1 max-w-xs max-md:max-w-sm max-sm:text-center">
            <h4 className="font-semibold mb-5">HELP</h4>
            <Link
              href={""}
              className="text-[#C1C1C1] text-sm mb-3 block cursor-pointer"
            >
              Getting Started
            </Link>
            <Link
              href={""}
              className="text-[#C1C1C1] text-sm mb-3 block cursor-pointer"
            >
              FAQs
            </Link>
          </div>

          <div className="flex-1 max-w-xs max-md:max-w-sm max-sm:text-center">
            <h4 className="font-semibold mb-5">CONTACT US</h4>
          </div>
        </div>

        <div className="pt-12">
          <div className="flex justify-between gap-4 max-md:flex-col max-md:items-center">
            <p className="flex-1">
              {" "}
              <span className="font-bold text-black bg-white rounded-full w-5 h-5 p-1 inline-flex items-center justify-center">
                c
              </span>{" "}
              <span className="text-sm text-[#C1C1C1] ml-2">
                {currentYear} All rights reserved.{" "}
                <span className="text-[#958BFF]">Movu.africa</span>
              </span>
            </p>
            <p className="flex-1 flex items-center gap-2">
              <Image
                src="https://res.cloudinary.com/dbbpapuyc/image/upload/v1660558217/movu/web-assets/Group_69_1.png"
                alt="Movu"
                quality={100}
                priority
                width={20}
                height={20}
              />
              <span className="font-bold text-sm">Movu</span>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
