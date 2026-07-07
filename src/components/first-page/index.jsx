import MainPhoto from "../../assets/image/mainPhoto.webp";
import { Container, Flexible } from "../../GlobalStyle";
import { FirstPagePart, FirstPagePartContext, GridDiv } from "./styled";
import { useEffect, useState } from "react";

export const FirstPage = () => {
  const weddingDate = new Date(2026, 8, 20, 0, 0, 0).getTime();
  const calculateTimeLeft = () => {
    const now = new Date();
    const diff = weddingDate - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num) => String(num).padStart(2, "0");

  return (
    <FirstPagePart>
      <img src={MainPhoto} />
      <Container>
        <FirstPagePartContext>
          <h2 style={{ fontSize: "30px", letterSpacing: "1px" }}>
            Հարսանյաց <br /> հրավեր
          </h2>
          <Flexible className="uniqueDiv">
            <h1>Էրիկ</h1>
            <p className="text-[89px] and">&</p>
            <h1 className="uniqueH1">Էլեն</h1>
          </Flexible>
          <div className="w-full absolute bottom-9">
            <h2 className="uniqueH2">Մնաց</h2>
            <GridDiv>
              <Flexible>
                <h2>{formatNumber(timeLeft.days)}</h2>
                <p>Օր</p>
              </Flexible>
              <Flexible>
                <h2>{formatNumber(timeLeft.hours)}</h2>
                <p>Ժամ</p>
              </Flexible>
              <Flexible>
                <h2>{formatNumber(timeLeft.minutes)}</h2>
                <p>Րոպե</p>
              </Flexible>
              <Flexible className="uniqueBorder">
                <h2>{formatNumber(timeLeft.seconds)}</h2>
                <p>Վայրկյան</p>
              </Flexible>
            </GridDiv>
          </div>
        </FirstPagePartContext>
      </Container>
    </FirstPagePart>
  );
};
