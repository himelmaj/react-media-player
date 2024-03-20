import React, { useRef, useState } from "react";

const Player = (props) => {
  const mediaRef = useRef(null);
  const [volume, setVolume] = useState(1);
  const play = () => mediaRef.current.play();
  const pause = () => mediaRef.current.pause();
  const stop = () => {
    mediaRef.current.pause();
    mediaRef.current.currentTime = 0;
  };

  const changeVolume = (e) => {
    setVolume(e.target.value);
    mediaRef.current.volume = e.target.value;
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <section className="card-body">
        {props.type === "audio" ? (
          <audio ref={mediaRef} controls={false}>
            <source src={props.src} type="audio/mp3" />
          </audio>
        ) : (
          <video ref={mediaRef} controls={false}>
            <source src={props.src} type="video/mp4" />
          </video>
        )}
      </section>

      <section className="card-actions justify-center p-5">
        <div className="flex flex-row justify-center items-center gap-2">
          <button className="btn btn-circle" onClick={play}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              fill="white"
            >
              <path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z" />
            </svg>
          </button>

          <button className="btn btn-circle" onClick={pause}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              fill="white"
            >
              <path d="M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z" />
            </svg>
          </button>
          <button className="btn btn-circle" onClick={stop}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              fill="white"
            >
              <path d="M440-122q-121-15-200.5-105.5T160-440q0-66 26-126.5T260-672l57 57q-38 34-57.5 79T240-440q0 88 56 155.5T440-202v80Zm80 0v-80q87-16 143.5-83T720-440q0-100-70-170t-170-70h-3l44 44-56 56-140-140 140-140 56 56-44 44h3q134 0 227 93t93 227q0 121-79.5 211.5T520-122Z" />
            </svg>
          </button>

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
