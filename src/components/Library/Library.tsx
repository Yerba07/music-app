import LibrarySong from "./LibrarySong";
import { List } from "./style";
// import data from "../../data";

function Library({ songs, currentSong, setCurrentSong }) {
  return (
    <List>
      <h2>Library</h2>
      {songs.map((song) => (
        <LibrarySong
          {...song}
          key={song.id}
          songs={songs}
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
        />
      ))}
    </List>
  );
}

export default Library;
