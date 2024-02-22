import { Image, SongContainer } from "./style";

// type SongItemProps = {
//   cover: string;
//   name: string;
//   artist: string;
//   id: number;
// };

function LibrarySong({
  cover,
  name,
  artist,
  id,
  currentSong,
  setCurrentSong,
  songs,
}) {
  // const selectedSong = songs.filter((state) => state.id === id);
  // function handleSelectSong() {
  //   songs.forEach((state) => {
  //     state.active = false;
  //   });
  //   selectedSong[0].active = true;
  //   setCurrentSong(selectedSong[0]);
  // }

  ///////////// Event Handler для выбора песни в Library
  const handleSelectSong = () => {
    const updatedSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setCurrentSong(updatedSongs.find((song) => song.id === id));
  };

  return (
    <SongContainer
      className={`${currentSong.id === id ? "active" : ""}`}
      onClick={handleSelectSong}
    >
      <Image src={cover} />
      <div>
        <h3>{name}</h3>
        <p>{artist}</p>
      </div>
    </SongContainer>
  );
}

export default LibrarySong;
