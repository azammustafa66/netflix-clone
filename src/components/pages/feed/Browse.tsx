
import React, { useState } from "react";
import Header from "../../layout/Header";
import useFetchMovies from "../../../utils/hooks/useFetchMovies";
import Hero from "./Hero";
import Movies from "./Movies";
import Loader from "../../loader-ui/Loader";

const Browse: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useFetchMovies();

  setTimeout(() => setIsLoading(false), 4500);

  if (isLoading) return <Loader />;

  return (
    <div className="relative z-0 bg-black w-full min-h-screen overflow-hidden">
      <Header isBrowsePage={true} />
      <Hero />
      <Movies />
    </div>
  );
};

export default Browse;
