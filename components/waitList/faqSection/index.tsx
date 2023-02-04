import React, { FC } from "react";
import FaqContainer from "@/components/common/faq/faqContainer";
import FaqData from "../../../json/WaitListFaq.json";
import Container from "@/components/ui/container";

const FaqSection: FC = () => {
  return (
    <>
      <Container>
        <h2 className="text-center text-4xl font-semibold mb-3 max-sm:pt-24">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-[#C1C1C1]">
          Have questions? We're here to help
        </p>
      </Container>
      <FaqContainer data={FaqData} />
    </>
  );
};

export default FaqSection;
