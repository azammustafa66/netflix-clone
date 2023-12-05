import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "recoil-movie-persist",
  storage: sessionStorage,
});

export const movieAtom = atom({
  key: "movieState",
  default: {
    trending: [],
    netflixOriginals: [],
    topRated: [],
    actionMovies: [],
    comedyMovies: [],
    horrorMovies: [],
    romanceMovies: [],
    documentaries: [],
  },
  effects_UNSTABLE: [persistAtom],
});
