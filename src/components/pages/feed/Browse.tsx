import React from "react";
import useFetchMovies from "../../../utils/hooks/useFetchMovies";
import Hero from "./Hero";
import Movies from "./Movies";

const Browse: React.FC = () => {
  useFetchMovies();

  return (
    <div className="relative z-0 bg-black w-full min-h-screen overflow-hidden">
      <Hero />
      <Movies />
    </div>
  );
};

export default Browse;
