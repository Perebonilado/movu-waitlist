import React, { FC, useEffect, useState } from "react";

import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import Logo from "@/components/ui/Logo";

const Navbar: FC = () => {
  const [navBg, setNavBg] = useState<string>("bg-black");

  const handleScroll = (): void => {
    if (window.scrollY > 0) {
      setNavBg("bg-black");
    } else setNavBg("bg-transparent");
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed z-40 top-0 left-0 w-full transition-background-color ease-in-out duration-200 ${navBg}`}
    >
      <Container>
        <div className="flex flex-row justify-between h-20 items-center">
          <Logo />

          <div>
            <Button
              text="join the waitlist"
              variant="contained"
              color="primary"
              className="mr-3"
              size="md"
            />
            <Button
              text="more info"
              variant="contained"
              color="secondary"
              size="md"
            />
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
