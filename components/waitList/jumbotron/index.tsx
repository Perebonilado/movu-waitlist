import React, { FC } from "react";

import Container from "../../ui/container";
import Button from "../../ui/button";
import s from "./styles.module.css";

const Jumbotron: FC = () => {
  return (
    <div
      className={`h-screen bg-[url('/waitlist/jumbotron-bg.png')] mb-10}`}
      style={{
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.75) 9.67%, rgba(0, 0, 0, 0) 41.82%) url(/waitlist/jumbotron-bg) center center/cover",
      }}
    >
      <img src="/waitlist/jumbotron-bg.png" style={{display: "none"}}/>

      <Container className="h-full">
        <div className="flex justify-center items-center h-full flex-col pt-20">
          <h1 className="text-center text-5xl font-extrabold">
            Stream movies, shows and a whole
          </h1>
          <h1 className="text-center text-5xl font-extrabold mb-8">
            lot more.
          </h1>
          <p className="text-[#C1C1C1] text-2xl mb-5 text-center">
            join movu to stream hd quality movies.
          </p>
          <Button text="join the waitlist" size="lg" />
        </div>
      </Container>
    </div>
  );
};

export default Jumbotron;
