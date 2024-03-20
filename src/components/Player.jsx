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
    <div>
      <section>
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

        <section>
            <div>
                <button onClick={play}>Play</button>
                <button onClick={pause}>Pause</button>
                <button onClick={stop}>Stop</button>
            </div>

            <div>

                <label htmlFor="volume">Volume</label>
                <input
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
