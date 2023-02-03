import React, { FC } from "react";
import FaqContainer from "@/components/common/faq/faqContainer";
import FaqData from "../../../json/WaitListFaq.json";

const FaqSection: FC = () => {
  return (
    <>
      <h2 className="text-center text-4xl font-semibold mb-3">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-[#C1C1C1]">
        Have questions? We're here to help
      </p>
      <FaqContainer data={FaqData} />
    </>
  );
};

export default FaqSection;
