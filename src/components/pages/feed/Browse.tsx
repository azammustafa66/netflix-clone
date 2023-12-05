import React from "react";
import Header from "../../layout/Header";

import useFetchMovies from "../../../utils/hooks/useFetchMovies";
import Hero from "./Hero";
import Movies from "./Movies";

const Browse: React.FC = () => {

  useFetchMovies();

  return (
    <div className="relative bg-[#221F1F] w-screen h-screen">
      <Header isBrowsePage={true} />
      <main>
        <Hero />
        {/* <Movies /> */}
      </main>
    </div>
  );
};

export default Browse;
