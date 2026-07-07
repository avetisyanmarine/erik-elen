import { ForthPageBlockPart } from "./styled";
export const ForthPageBlock = ({ ImageSrc, bigText, mapSrc }) => {
  return (
    <>
      <ForthPageBlockPart>
        <h2>{bigText}</h2>
        <img
          loading="lazy"
          data-aos="fade-right"
          className="rounded-[15px]"
          src={ImageSrc}
        />
        <a
          data-aos="fade-left"
          className="underline text-2xl"
          href={mapSrc}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ինչպե՞ս հասնել
        </a>
      </ForthPageBlockPart>
    </>
  );
};
