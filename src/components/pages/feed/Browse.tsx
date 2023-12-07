import React from "react";
import useFetchMovies from "../../../utils/hooks/useFetchMovies";
import Hero from "./Hero";
import Movies from "./Movies";
import { useRecoilValue } from "recoil";
import { trailersAtom } from "../../../utils/recoil-atoms/trailersAtom";
import Loader from "../../loader-ui/Loader";

const Browse: React.FC = () => {
  const { link } = useRecoilValue(trailersAtom);
  useFetchMovies();

  return link === "" ? (
    <Loader />
  ) : (
    <div className="relative z-0 bg-black w-full min-h-screen overflow-hidden">
      <Hero />
      <Movies />
    </div>
  );
};

export default Browse;
