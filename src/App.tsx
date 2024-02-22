import { useState } from "react";
import data from "./data";
import Player from "./components/player/Player.tsx";
import Library from "./components/Library/Library.tsx";
function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);

  return (
    <div className="App">
      <Player
        songs={songs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
      />
      <Library
        songs={songs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />
    </div>
  );
}

export default App;
