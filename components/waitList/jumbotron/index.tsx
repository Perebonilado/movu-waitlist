import React, { FC } from "react";

import Container from "../../ui/container";
import Button from "../../ui/button";

const Jumbotron: FC = () => {
  return (
    <div className="h-screen bg-gradient-to-b from-black to-transparent">
      <Container className="h-full">
        <div className="flex justify-center items-center h-full flex-col pt-20">
          <h1 className="text-center text-5xl font-extrabold">
            Stream movies, shows and a whole
          </h1>
          <h1 className="text-center text-5xl font-extrabold mb-8">
            lot more.
          </h1>
          <p className="text-[#C1C1C1] text-2xl mb-5">
            join movu to stream hd quality movies.
          </p>
          <Button text="join the waitlist" size="lg" />
        </div>
      </Container>
    </div>
  );
};

export default Jumbotron;
