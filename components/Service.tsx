import { Button } from "./Button";

export const Service = ({
  title,
  picto,
  text,
  link,
}: {
  title: string;
  picto: string;
  text: string;
  link: string;
}) => {
  return (
    <div>
      <img src={picto} alt={"pictogramme " + title} />
      <h4>{title}</h4>
      <p>{text}</p>
      <Button text="Découvrir" link={link} />
    </div>
  );
};
