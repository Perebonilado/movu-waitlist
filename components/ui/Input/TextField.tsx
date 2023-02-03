import React, { FC, HTMLAttributes } from "react";

import cn from "classnames";
import styles from "./styles.module.css";

interface Props extends HTMLAttributes<HTMLInputElement> {
  size?: "md" | "lg" | "sm";
}

const TextField: FC<Props> = ({ size = "md", className, ...props }) => {
  const rootClassName = cn(className, {
    [styles.textField]: true,
    [styles.md]: size === "md",
    [styles.lg]: size === "lg",
  });

  return (
    <label>
      <input type="text" {...props} className={rootClassName} />
    </label>
  );
};

export default TextField;
