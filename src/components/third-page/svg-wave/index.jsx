import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const SvgWaveLine = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Սկսում է շարժվել, երբ կոնտեյների սկիզբը հասնում է էկրանի 90%-ին
    // Ավարտում է, երբ կոնտեյների վերջը հասնում է էկրանի 50%-ին
    offset: ["start 0.9", "end 0.5"],
  });

  // 1.5-ը ստանդարտ արագություն է.
  // Փոքրացրու (օրինակ՝ 1.2), եթե ուզում ես ավելի արագացնել
  // Մեծացրու (օրինակ՝ 2), եթե ուզում ես դանդաղեցնել
  const offsetDistance = useTransform(
    scrollYProgress,
    [0, 1.5],
    ["0%", "100%"],
  );

// Նախորդ հատվածին ավելացնում ենք ևս մեկ Q կոր
const path = "M 100 10 Q 260 140 150 250 Q -50 380 90 450 Q 250 520 150 610 Q -120 720 100 890 Q 260 1020 150 1130 Q -50 1260 90 1330 Q 250 1400 150 1490";
  return (
    <div
      ref={containerRef}
      className="absolute left-1/2 -translate-x-1/2 top-0 -z-10 w-[200px] h-[900px]"
    >
      <svg width="200" height="900" viewBox="0 0 200 900" fill="none">
        <path
          d={path}
          stroke="#3d3a3a"
          strokeWidth="2"
          fill="none"
          strokeDasharray="10 8"
        />
      </svg>

      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          transform: "translate(-50%, -50%)",
          offsetPath: `path("${path}")`,
          offsetDistance: offsetDistance,
        }}
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="red"
          className="stroke-white stroke-3"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </motion.div>
    </div>
  );
};
