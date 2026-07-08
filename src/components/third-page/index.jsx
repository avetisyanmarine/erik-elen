import {
  ThirdPagePart,
  ThirdPagePartCalendar,
  ThirdPagePartContext,
  ThirdPagePartMini,
} from "./styled";
import { Container } from "../../GlobalStyle";
import SvgChurch from "../../assets/vectors/churchsvg.webp";
import Church from "../../assets/image/church.webp";
import Restaurant from "../../assets/image/restoran.webp";
import Photo2 from "../../assets/image/photo2.webp";
import SvgRing from "../../assets/vectors/ring.png";
import Photosesia from "../../assets/vectors/photosesia.webp";
import SvgCouple from "../../assets/vectors/cup.png";
import Shine from "../../assets/vectors/shine.webp";
import { ForthPagePartContext, ForthPagePart } from "../forth-page/styled";
import { ForthPageBlock } from "../forth-page/fortg-page-block";
import { ThirdPageBlock } from "./third-page-block";
import { SvgWaveLine } from "./svg-wave/index";

export const ThirdPage = () => {
  return (
    <ThirdPagePart>
      <Container>
        <h2>Ծրագիր</h2>
        <ThirdPagePartContext>
          <ThirdPagePartContext>
            <ThirdPageBlock
              ImageSrc={SvgChurch}
              number={"14:00"}
              bigText="ՊՍԱԿԱԴՐՈՒԹՅՈՒՆ"
              smallText="Սուրբ Հովհաննես Մկրտիչ եկեղեցի"
              direction="left"
            />
            <ThirdPageBlock
              ImageSrc={Photosesia}
              number={"15:30"}
              bigText="ՖՈՏՈՍԵՍԻԱ"
              direction="right"
            />
             <ThirdPageBlock
              ImageSrc={SvgRing}
              number={"17:00"}
              bigText="ԶԱԳՍ"
              smallText="Ռեստորանի բացօdյա հատված"
              direction="left"
            />
            <SvgWaveLine />
            <ThirdPageBlock
              className={"english"}
              ImageSrc={SvgCouple}
              number={"17:30"}
              bigText="ՀԱՐՍԱՆՅԱՑ ՀԱՆԴԻՍՈՒԹՅՈՒՆ"
              smallText="Ginats Restaurant Complex"
              direction="right"
            />
            <ThirdPageBlock
              className={"english"}
              ImageSrc={Shine}
              number={"23:00"}
              bigText="Տոնական օրվա ավարտ"
              // smallText="Տոնական օրվա ավարտ"
              direction="left"
            />
          </ThirdPagePartContext>
        </ThirdPagePartContext>
        <ForthPagePartContext>
          <ForthPageBlock
            ImageSrc={Church}
            bigText={"Սուրբ Հովհաննես Մկրտիչ եկեղեցի"}
            mapSrc={"https://maps.app.goo.gl/tpEMNUzJJBkBVFEC8"}
          />
          <ForthPageBlock
            className={"english"}
            ImageSrc={Restaurant}
            bigText={"Ginats Restaurant Complex"}
            mapSrc={"https://yandex.com/maps/-/CTuQm-0w"}
          />
        </ForthPagePartContext>
      </Container>
      <img src={Photo2} className="rounded-[15px]" alt="" />
      <Container>
        <ThirdPagePartMini>
          <h3 className="dzev">Սիրով սպասում ենք</h3>
          <hr />
          <h3 className="dzev">Պահպանիր Օրը</h3>
          <h3>Սեպտեմբեր</h3>
        </ThirdPagePartMini>
        <ThirdPagePartCalendar>
          {[...Array(35)].map((_, i) =>
            i > 0 && i <= 30 ? (
              <div className={i == 20 ? "special" : ""}>{i}</div>
            ) : (
              <div></div>
            ),
          )}
        </ThirdPagePartCalendar>
      </Container>
    </ThirdPagePart>
  );
};
