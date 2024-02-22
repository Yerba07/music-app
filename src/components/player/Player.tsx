import { useEffect, useRef, useState } from "react";
import {
  ButtonContainer,
  Img,
  InputContainer,
  MusicContainer,
  Nav,
  PlayerContainer,
  SongContainer,
} from "./style";

function Player({ songs, currentSong, setCurrentSong, setSongs }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [autoPlay, setAutoPlay] = useState<boolean>(false);

  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  ///////////// Метод для получение таймера музыки
  function getTime(time: number) {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  }

  ///////////// Обновляет таймер музыки
  useEffect(() => {
    function updateTime() {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
    }

    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  ///////////// Обновляет дорожку или input или player (как угодно вообщем)
  const handleInputChange = (e) => {
    const time = e.target.value;
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  ///////////// Event Handler для Play
  function handlePlaySong() {
    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    } else if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }

  ///////////// Eventhandler-и для скиппа между песнями
  function handleChangeSongForward() {
    const currontSongIndex = songs.findIndex(
      (curSong) => curSong.id === currentSong.id
    );
    if (currontSongIndex < songs.length - 1)
      setCurrentSong(songs[currontSongIndex + 1]);
    else setCurrentSong(songs[0]);
    setAutoPlay(true);
  }

  function handleChangeSongBack() {
    const currontSongIndex = songs.findIndex(
      (curSong) => curSong.id === currentSong.id
    );
    if (currontSongIndex > 0) setCurrentSong(songs[currontSongIndex - 1]);
    else setCurrentSong(songs[songs.length - 1]);
    setAutoPlay(true);
  }

  ///////////// Автовоспроизведение при переходе между песнями
  useEffect(() => {
    if (autoPlay) {
      audioRef.current.play();
      setIsPlaying(true);
      setAutoPlay(false);
    }
  }, [autoPlay]);

  ///////////// Установка active=true для текущий песни
  useEffect(() => {
    const updatedSongs = songs.map((song) => {
      return {
        ...song,
        active: song === currentSong,
      };
    });

    setSongs(updatedSongs);
  }, [currentSong, songs, setSongs]);

  ///////////// Переход на след песню при завершение текущего
  useEffect(() => {
    const handleSongEnd = () => {
      const currontSongIndex = songs.findIndex(
        (curSong) => curSong.id === currentSong.id
      );
      if (currontSongIndex < songs.length - 1) {
        setCurrentSong(songs[currontSongIndex + 1]);
      } else {
        setCurrentSong(songs[0]);
      }
    };

    audioRef.current?.addEventListener("ended", handleSongEnd);

    return () => {
      audioRef.current?.removeEventListener("ended", handleSongEnd);
    };
  }, [currentSong, songs, setCurrentSong]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
    }
  }, [currentSong, isPlaying]);

  return (
    <>
      <MusicContainer>
        <Nav>
          <h1>Calming Waves</h1>
        </Nav>
        <main>
          <SongContainer>
            <Img src={currentSong.cover} />
            <h2>{currentSong.name}</h2>
            <p>{currentSong.artist}</p>
          </SongContainer>
          <PlayerContainer>
            <InputContainer>
              <span>{getTime(currentTime)}</span>
              <input
                type="range"
                value={currentTime || 0}
                min={0}
                max={duration}
                onChange={handleInputChange}
              />
              <span>{getTime(duration) || "0:00"}</span>
            </InputContainer>
            <ButtonContainer>
              <span onClick={handleChangeSongBack}>
                <ion-icon name="play-skip-back-circle-outline"></ion-icon>
              </span>
              <span onClick={handlePlaySong}>
                {!isPlaying ? (
                  <ion-icon name="play-outline"></ion-icon>
                ) : (
                  <ion-icon name="pause-circle-outline"></ion-icon>
                )}
              </span>
              <span onClick={handleChangeSongForward}>
                <ion-icon name="play-skip-forward-circle-outline"></ion-icon>
              </span>
            </ButtonContainer>
          </PlayerContainer>
        </main>
        <audio src={currentSong.audio} ref={audioRef} />
      </MusicContainer>
    </>
  );
}

export default Player;
