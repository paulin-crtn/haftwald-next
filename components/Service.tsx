import Image from "next/image";

export const Service = ({
  title,
  picto,
  text,
  modalKey,
}: {
  title: string;
  picto: StaticImageData;
  text: string;
  modalKey: string;
}) => {
  return (
    <div>
      <Image
        src={picto}
        alt={"pictogramme " + title}
        placeholder="blur" // Optional blur-up while loading
      />
      <h4>{title}</h4>
      <p>{text}</p>
      <button>Découvrir</button>
    </div>
  );
};
