import { useState } from "react";
import data from "./data";
import Player from "./components/player/Player.tsx";
import Library from "./components/Library/Library.tsx";
function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isLibrary, setIsLibrary] = useState<boolean>(false);

  return (
    <div className="App">
      <Player
        songs={songs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
        isLibrary={isLibrary}
        setIsLibrary={setIsLibrary}
      />
      <Library
        songs={songs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        isLibrary={isLibrary}
      />
    </div>
  );
}

export default App;
