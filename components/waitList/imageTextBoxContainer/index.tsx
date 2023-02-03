import React, { FC } from "react";
import ImageTextBox from "../imageTextBox";
import Container from "../../ui/container";

interface Props {
  data: { title: string; body: string; imageUrl: string }[];
}

const ImageTextBoxContainer: FC<Props> = ({ data }) => {
  return (
    <Container>
      <div className="px-20">
        {data.map((item, index) => (
          <ImageTextBox {...item} key={index} />
        ))}
      </div>
    </Container>
  );
};

export default ImageTextBoxContainer;
