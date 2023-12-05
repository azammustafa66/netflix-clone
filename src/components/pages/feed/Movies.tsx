import React from "react";
import { useRecoilValue } from "recoil";

import { movieAtom } from "../../../utils/recoil-atoms/movieAtom";

const Movies: React.FC = () => {
  const movies = useRecoilValue(movieAtom);

  return <div>Movies</div>;
};

export default Movies;
