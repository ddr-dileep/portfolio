import "./style.scss";

const Heading = ({ title, className }: Props) => {
  return <h2 className={`common-heading-title ${className}`}>{title}</h2>;
};

export default Heading;

interface Props {
  title: string;
  className?: string;
}
