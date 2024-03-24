import { MouseEventHandler } from "react";
import "./style.scss";

export const Button = ({ title, className, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`learn-more ${className}`}>
      <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <span className="button-text">{title}</span>
    </button>
  );
};

interface ButtonProps {
  title: string;
  className?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}
