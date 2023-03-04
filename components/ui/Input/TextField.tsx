import React, { FC, HTMLAttributes } from "react";

import cn from "classnames";
import styles from "./styles.module.css";

interface Props extends HTMLAttributes<HTMLInputElement> {
  size?: "md" | "lg" | "sm";
  variant?: "dark" | "light"
}

const TextField: FC<Props> = ({ size = "md", variant="light", className, ...props }) => {
  const rootClassName = cn(className, {
    [styles.textField]: true,
    [styles.md]: size === "md",
    [styles.lg]: size === "lg",
    [styles.dark]: variant ===  "dark"
  });

  return (
    <label>
      <input type="text" {...props} className={rootClassName} />
    </label>
  );
};

export default TextField;
