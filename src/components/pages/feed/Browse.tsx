import React from "react";
import Header from "../../layout/Header";

import useFetchMovies from "../../../utils/hooks/useFetchMovies";
import Hero from "./Hero";
import Movies from "./Movies";

const Browse: React.FC = () => {
  useFetchMovies();

  return (
    <div className="relative z-0 bg-black w-screen min-h-screen overflow-hidden py-8">
      <Header isBrowsePage={true} />
      <main>
        <Hero />
        <Movies />
      </main>
    </div>
  );
};

export default Browse;
