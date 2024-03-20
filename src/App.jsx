import Player from "./components/Player"
import Video from "./assets/music/video.mp4"
const App = () => {
  return (
    <div>
      {/* <Player type="audio" src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" /> */}
      <Player type="video" src={Video} />
    </div>
  )
}

export default App