import "./App.css";
import { useRef, useState, useEffect } from "react";

const Player = ({ source }) => {
  const playerRef = useRef();
  const [volume, setVolume] = useState(1); // Початкова гучність
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const play = () => playerRef.current.play();
  const pause = () => playerRef.current.pause();
  const loadVideo = () => playerRef.current.load();

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
    playerRef.current.volume = newVolume; // Зміна гучності
  };

  const handleTimeUpdate = () => {
    setCurrentTime(playerRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(playerRef.current.duration);
  };

  useEffect(() => {
    const videoElement = playerRef.current;
    videoElement.addEventListener("timeupdate", handleTimeUpdate);
    videoElement.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      videoElement.removeEventListener("timeupdate", handleTimeUpdate);
      videoElement.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  return (
    <div>
      <video ref={playerRef} src={source}>
        Sorry, your browser does not support embedded videos.
      </video>
      <div>
        <button onClick={play}>Play</button>
        <button onClick={pause}>Pause</button>
        <button onClick={loadVideo}>Reload</button>
      </div>
      <div>
        <label>
          Volume:
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
          />
        </label>
        <p>
          Current Time: {currentTime.toFixed(2)} / {duration.toFixed(2)} seconds
        </p>
      </div>
    </div>
  );
};

const App = () => {
  return <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" />;
};

export default App;
