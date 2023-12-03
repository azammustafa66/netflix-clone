import React from "react";
import Header from "./Header";

const Browse: React.FC = () => {
  return (
    <div className="bg-[#221F1F] h-screen">
      <Header isBrowsePage={true} />
      <main></main>
    </div>
  );
};

export default Browse;
