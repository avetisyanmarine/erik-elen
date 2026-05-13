import {
  ThirdPagePart,
  ThirdPagePartCalendar,
  ThirdPagePartContext,
  ThirdPagePartMini,
} from "./styled";
import { Container } from "../../GlobalStyle";
import SvgChurch from "../../assets/vectors/church.png";
import Church from "../../assets/image/church.jpg";
import Restaurant from "../../assets/image/restoran.jpg";
import Photo2 from "../../assets/image/photo2.jpg";
import SvgRing from "../../assets/vectors/ring.png";
import SvgCouple from "../../assets/vectors/cup.png";
import { ForthPagePartContext, ForthPagePart } from "../forth-page/styled";
import { ForthPageBlock } from "../forth-page/fortg-page-block";
import { ThirdPageBlock } from "./third-page-block";

export const ThirdPage = () => {
  return (
    <ThirdPagePart>
      <Container>
        <h2>Ծրագիր</h2>
        <ThirdPagePartContext>
          <ThirdPageBlock
            className="uniqueone"
            ImageSrc={SvgRing}
            number={"12:00"}
            bigText="ՀԱՐՍԻ ՏՈՒՆ"
          />
          <ThirdPageBlock
            ImageSrc={SvgChurch}
            number={"15:45"}
            bigText="ՊՍԱԿԱԴՐՈՒԹՅՈՒՆ"
            smallText="Հովհաննավանք եկեղեցի"
          />
          <ThirdPageBlock
            className="secondBlock"
            line={true}
            ImageSrc={SvgCouple}
            number={"17:00"}
            bigText="ՀԱՐՍԱՆՅԱՑ ՀԱՆԴԻՍՈՒԹՅՈՒՆ"
            smallText="Աշտարակ Հոլ ռեստորան"
          />
        </ThirdPagePartContext>
        <ForthPagePartContext>
          <ForthPageBlock
            ImageSrc={Church}
            bigText={"Հովհաննավանք եկեղեցի"}
            mapSrc={"https://yandex.com/maps/org/224495205780?"}
          />
          <ForthPageBlock
            ImageSrc={Restaurant}
            bigText={"Աշտարակ Հոլ ռեստորան"}
            mapSrc={"https://yandex.com/maps/org/100881804174?"}
          />
        </ForthPagePartContext>
      </Container>
      <img src={Photo2} className="rounded-[15px]" alt="" />
      <Container>
        <ThirdPagePartMini>
          <h3 className="dzev">Սիրով սպասում ենք</h3>
          <hr />
          <h3 className="dzev">Պահպանիր Օրը</h3>
          <h3>Հուլիս</h3>
        </ThirdPagePartMini>
        <ThirdPagePartCalendar>
          {[...Array(35)].map((_, i) =>
            i > -1 && i <= 29 ? (
              <div className={i - 1 == 2 ? "special" : ""}>{i + 1}</div>
            ) : (
              <div></div>
            ),
          )}
        </ThirdPagePartCalendar>
      </Container>
    </ThirdPagePart>
  );
};
