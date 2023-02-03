import React, { HTMLAttributes } from "react";
import cn from "classnames";
import styles from "./styles.module.css";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  text: string;
  handleClick?: () => any;
  variant?: "text" | "contained" | "outlined";
  color?: "primary" | "secondary";
  size?: "lg" | "sm" | "md";
}

const Button: React.FC<Props> = ({
  text,
  handleClick,
  variant = "contained",
  color = "primary",
  size = "md",
  className,
  ...props
}) => {
  const rootClassName = cn(
    {
      btn: true,
      [styles.contained]: variant === "contained",
      [styles.outlined]: variant === "outlined",
      [styles.text]: variant === "text",
      [styles.md]: size === "md",
      [styles.sm]: size === "sm",
      [styles.lg]: size === "lg",
      [styles.primary]: color === "primary",
      [styles.secondary]: color === "secondary",
    },
    className
  );

  return (
    <button className={rootClassName} {...props}>
      {text.toLocaleUpperCase()}
    </button>
  );
};

export default Button;
