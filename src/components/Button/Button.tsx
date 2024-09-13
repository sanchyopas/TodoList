import * as React from "react";
type ButtonPropsType = {
  onClick?: () => void;
  title: string;
  className?: string;
  buttonType?: "button" | "submit" | "reset";
};
export const Button = ({onClick, title, className, buttonType}: ButtonPropsType) => {
  return (
    <button type={buttonType} className={className} onClick={onClick}>
      {title}
    </button>
  );
};
