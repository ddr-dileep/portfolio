import { TypeAnimation } from "react-type-animation";
import "./style.scss";

export const TextTypeAnimation = ({
  className,
  repeat = Infinity,
  sequence,
  wrapper = "span",
  style = { fontSize: "2em", display: "block" },
  speed = 50,
}: TextTypeAnimationProps) => {
  return (
    <TypeAnimation
      sequence={sequence}
      wrapper={wrapper}
      speed={speed}
      style={style}
      repeat={repeat}
      className={className}
    />
  );
};


interface TextTypeAnimationProps {
  className?: string;
  repeat?: any;
  sequence: Array<any>;
  wrapper?: any;
  style?: any;
  speed?: number | any | undefined;
}
