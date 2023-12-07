import React from "react";
import useFetchMovies from "../../../utils/hooks/useFetchMovies";
import { useRecoilValue } from "recoil";

import Hero from "./Hero";
import Movies from "./Movies";
import Loader from "../../loader-ui/Loader";
import { movieAtom } from "../../../utils/recoil-atoms/movieAtom";

const Browse: React.FC = () => {
  const { trending } = useRecoilValue(movieAtom);
  useFetchMovies();

  if (!trending || trending.length <= 0) return <Loader />;

  return (
    <div className="relative z-0 bg-black w-full min-h-screen overflow-hidden">
      <Hero />
      <Movies />
    </div>
  );
};

export default Browse;
