import React, { HTMLAttributes, PropsWithChildren } from "react";
import styles from "./styles.module.css";
import cn from "classnames";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Container: React.FC<PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  const rootClassName = cn(styles.root, className);

  return <div className={`${rootClassName} max-sm:!px-3`}>{children}</div>;
};

export default Container;
