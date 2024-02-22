// import { createSlice } from "@reduxjs/toolkit";

// type Song = {
//   id: string;
//   name: string;
//   artist: string;
//   cover: string;
//   active: boolean;
// };

// type InitialState = {
//   songs: Song[];
// };

// const initialState: InitialState = {
//   songs: [],
// };

// const songSlice = createSlice({
//   name: "song",
//   initialState,
//   reducers: {
//     selectSongByLibrary(state, action) {
//       const currentSong = state.songs.map((song) => song.id === action.payload);
//       currentSong.active = true;
//     },
//   },
// });

// export default songSlice;
