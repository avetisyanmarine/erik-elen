import { SecondPagePart, SecondPagePartContext } from "./styled";
import { Container } from "../../GlobalStyle";
import Photo1 from "../../assets/image/photo1.webp";

export const SecondPage = () => {
  return (
    <SecondPagePart>
      <Container>
        <SecondPagePartContext>
          <div>
            <h4 data-aos="fade-left">
              Սիրով հրավիրում ենք Ձեզ մասնակցելու մեր կյանքի կարևոր և հիշարժան
              օրվան։
            </h4>
          </div>
        </SecondPagePartContext>
        <img
          data-aos="fade-right"
          src={Photo1}
          alt="Photo 1"
          className="rounded-[15px]"
        />
        <h2>20.09.2026</h2>
      </Container>
    </SecondPagePart>
  );
};
