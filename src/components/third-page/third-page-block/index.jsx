import { ThirdPagePartContext } from "../styled";
import { ThirdPageBlockPart, ThirdPageBlockPartSvg } from "./styled";

export const ThirdPageBlock = ({ ImageSrc, number, bigText, smallText, direction, className }) => {
  return (
    <ThirdPageBlockPart direction={direction}>
      <ThirdPageBlockPartSvg>
        <img loading="lazy" src={ImageSrc} alt="" />
      </ThirdPageBlockPartSvg>
      
      {/* Այստեղ direction-ը փոխանցում ենք, որպեսզի տեքստը հավասարվի */}
      <ThirdPagePartContext data-aos={direction === "right" ? "fade-right" : "fade-left"} direction={direction}>
        <h3>{number}</h3>
        <h3>{bigText}</h3>
        <p className={className || ""}>{smallText}</p>
      </ThirdPagePartContext>
    </ThirdPageBlockPart>
  );
};
