import { Container, Flexible } from "../../GlobalStyle";
import PHoto3 from "../../assets/image/photo3.webp";
import SaveTheDate from "../../assets/image/savethedate.png";
import AttendanceGuests from "../AttendanceGuests";
import { ForthPagePart } from "./styled";
import PhotoF1 from "../../assets/image/photof1.webp";
import PhotoF2 from "../../assets/image/photof2.webp";
import PhotoF3 from "../../assets/image/photof3.webp";
import PhotoF4 from "../../assets/image/photof4.webp";
import { useEffect, useState } from "react";

export const ForthPage = () => {
  const weddingDate = new Date(2026, 5, 27, 0, 0, 0);

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

  const [slideIndex, setSlideIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  const sliderImages = [
    { src: PhotoF1, alt: "Wedding photo 1" },
    { src: PhotoF2, alt: "Wedding photo 2" },
    { src: PhotoF3, alt: "Wedding photo 3" },
    { src: PhotoF4, alt: "Wedding photo 4" },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % sliderImages.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [sliderImages.length]);
  const formatNumber = (num) => String(num).padStart(2, "0");

  const prevSlide = () => {
    setSlideIndex(
      (prev) => (prev - 1 + sliderImages.length) % sliderImages.length,
    );
  };

  const nextSlide = () => {
    setSlideIndex((prev) => (prev + 1) % sliderImages.length);
  };

  return (
    <ForthPagePart>
      <Container>
        <div
          className="relative mt-[50px] rounded-[15px] overflow-hidden shadow-2xl h-[420px]"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="400"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />
          {sliderImages.map((image, index) => {
            const active = index === slideIndex;
            return (
              <img
                key={image.alt}
                src={image.src}
                alt={image.alt}
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-in-out ${
                  active ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              />
            );
          })}

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-white/40 text-2xl text-black shadow-xl backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white"
            aria-label="Previous slide"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-white/40 text-2xl text-black shadow-xl backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white"
            aria-label="Next slide"
          >
            →
          </button>
        </div>
        <div className="flex justify-center gap-3 mt-4!">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setSlideIndex(index)}
              className={`h-3.5 w-12 rounded-full transition-all duration-300 ${
                slideIndex === index
                  ? "bg-white shadow-xl"
                  : "bg-white/40 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Container>
      <div style={{ margin: "55px 0" }} className="text-center w-full">
        <h2 style={{ marginBottom: "20px" }}>Դետալներ</h2>
        <Flexible>
          <Flexible
            style={{ padding: "0 25px" }}
            data-aos="fade-up"
            className=" w-full py-10! bg-white/45 text-2xl"
          >
            Ձեզ հետ բերեք ՍԵՐ, ժպիտներ ու անսահման դրական էմոցիաներ։
            <br />
            <br />
            Հարսի պարի և հրավառության ընթացքում կխնդրենք ծնողներին ուշադիր լինել
            իրենց բալիկների նկատմամբ:
          </Flexible>
        </Flexible>
      </div>
      <div className="relative">
        <img src={PHoto3} alt="Photo 3" className="rounded-[15px]" />
        <img
          className="absolute invert-100 brightness-0 contrast-250 top-1.5 left-1.5 w-[110px]"
          src={SaveTheDate}
          alt="Save The Date"
        />
      </div>
      <Container>
        <AttendanceGuests />
        <h2
          className="text-center font-[ArmAllegrou]"
          style={{ margin: "20px 0" }}
        >
          Սիրով ՝ <br /> Էրիկ և Էլեն
        </h2>
      </Container>
    </ForthPagePart>
  );
};
