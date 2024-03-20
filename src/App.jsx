import Player from "./components/Player";
import video from "./assets/video.mp4";
import audio from "./assets/audio.mp3";

import { useRef, useState } from "react";

const App = () => {
  const [media, setMedia] = useState(null);

  const handleChoose = (e) => {
    setMedia(URL.createObjectURL(e.target.files[0]));
  };

  const handleReset = () => {
    setMedia(null);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {media === null ? (
        <input
          type="file"
          accept="audio/*,video/*"
          className="file-input file-input-bordered file-input-info w-full max-w-xs"
          onChange={handleChoose}
        />
      ) : (
        <div className="flex flex-col gap-2">
          <Player
            src={media}
            type={media.includes("mp4") ? "video" : "audio"}
          />
          <button className="btn btn-info" onClick={handleReset}>Reset</button>
        </div>
      )}
    </div>
  );
};

export default App;
