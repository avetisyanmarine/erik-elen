import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";

const WeddingInvitationEnvelope = ({ onOpen }) => {
  const [isOpened, setIsOpened] = useState(false);
  const topControls = useAnimation();
  const bottomControls = useAnimation();
  const sealControls = useAnimation();


  const handleOpen = async () => {
    if (!isOpened) {
      await sealControls.start({
        opacity: 0,
        scale: 0.8,
        transition: { duration: 0.3 },
      });

      await Promise.all([
        topControls.start({
          y: "-100%",
          transition: { duration: 1.4, ease: [0.4, 0, 0.2, 1] },
        }),
        bottomControls.start({
          y: "100%",
          transition: { duration: 1.4, ease: [0.4, 0, 0.2, 1] },
        }),
      ]);

      setIsOpened(true);
      if (onOpen) onOpen();
    }
  };

  return (
    <div className="fixed inset-0 w-screen h-screen z-[9999] overflow-hidden bg-white/10 backdrop-blur-sm">
      <motion.div
        className="absolute top-0 left-0 w-full h-[60%] z-30 shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
        animate={topControls}
        initial={{ y: 0 }}
        style={{
          backgroundColor: "#ffffff",
          clipPath: "polygon(-120% 0%, 215% 0%, 50% 100%)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      />

      <motion.div
        className="absolute bottom-0 left-0 w-full h-[90%] z-10 shadow-inner"
        animate={bottomControls}
        initial={{ y: 0 }}
        style={{
          backgroundColor: "#ebe1d5", // Հիմնական մուգ գույնը
          clipPath: "polygon(-120% 0%, 205% 0%, 50% 100%)",
          rotate: "180deg",
        }}
      ></motion.div>

      {!isOpened && (
        <motion.div
          animate={sealControls}
          initial={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          className="absolute top-[59%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 cursor-pointer drop-shadow-2xl"
          onClick={handleOpen}
        >
          <img
            src="letterbutton.webp"
            alt="Seal"
            className="w-38 h-38 md:w-32 md:h-32 object-contain"
          />
          <h2 className="text-[#fff] text-[35px] mb-1 text-center">Բացել</h2>
        </motion.div>
      )}
    </div>
  );
};

export default WeddingInvitationEnvelope;
