import React, { useRef, useState } from "react";
import PlayIcon from "../assets/icons/PlayIcon";
import PauseIcon from "../assets/icons/PauseIcon";
import ResetIcon from "../assets/icons/ResetIcon";
import Button from "./Button";

const Player = (props) => {
  const mediaRef = useRef(null);
  const [volume, setVolume] = useState(0.5);
  const [isPlaying, setIsPlaying] = useState(false);

  const play = () => {
    setIsPlaying(true);
    mediaRef.current.play();
  };
  const pause = () => {
    setIsPlaying(false);
    mediaRef.current.pause();
  };
  const stop = () => {
    setIsPlaying(false);
    mediaRef.current.pause();
    mediaRef.current.currentTime = 0;
  };

  const changeVolume = (e) => {
    setVolume(e.target.value);
    mediaRef.current.volume = e.target.value;
  };

  return (
    <div className="card  w-96 bg-base-100 shadow-xl">
      <section className="card-body">
        {props.type.includes("audio") ? (
          <>
            <h2 className="card-title">{props.name}</h2>
            <audio ref={mediaRef} controls={false}>
              <source src={props.src} type={props.type} />
            </audio>
          </>
        ) : (
          <>
            <h2 className="card-title truncate w-30">{props.name}</h2>
            <video ref={mediaRef} controls={false}>
              <source src={props.src} type="video/mp4" />
            </video>
          </>
        )}
      </section>

      <section className="card-actions justify-center p-5">
        <div className="flex flex-row justify-center items-center gap-2">
          <Button click={!isPlaying ? play : pause}>
            {!isPlaying ? <PlayIcon /> : <PauseIcon />}
          </Button>

          <Button click={stop}>
            <ResetIcon />
          </Button>

          <input
            className="range range-info"
            type="range"
            id="volume"
            name="volume"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={changeVolume}
          />
        </div>
      </section>
    </div>
  );
};

export default Player;
