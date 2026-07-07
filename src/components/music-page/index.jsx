import { MusicPagePart } from "./styled";
import Pause from "../../assets/vectors/pause.svg";
import Play from "../../assets/vectors/play.svg";
import Song from "../../assets/audio/song.mp3";
import { useEffect, useRef, useState } from "react";

export const MusicPage = ({ isPlaying }) => {
  const audioRef = useRef(null);
  const [manualPlay, setManualPlay] = useState(false);

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current
        .play()
        .catch((err) => console.log("Playback error:", err));
      setManualPlay(true);
    }
  }, [isPlaying]);

  const handleClick = () => {
    if (manualPlay) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setManualPlay(!manualPlay);
  };
  return (
    <MusicPagePart>
      <div>
        <h4 className="text-[16px]">Sirum Em</h4>
      </div>
      <div onClick={handleClick}>
        <img src={manualPlay ? Pause : Play} alt="music-control" />
      </div>
      <audio ref={audioRef} src={Song} loop />
    </MusicPagePart>
  );
};
