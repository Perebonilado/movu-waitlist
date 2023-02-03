import React, { FC } from "react";
import FaqItem from "./faqItem";
import Container from "@/components/ui/container";

interface Props {
  data: { id: string; title: string; body: string }[];
}

const FaqContainer: FC<Props> = ({ data }) => {
  return (
    <Container>
      <div className="px-32 py-10">
        {data.map((item) => (
          <FaqItem {...item} key={item.id} />
        ))}
      </div>
    </Container>
  );
};

export default FaqContainer;
