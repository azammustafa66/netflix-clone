import React from "react";
import { useRecoilValue } from "recoil";
import { IoPlaySharp } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";

import { movieAtom } from "../../../utils/recoil-atoms/movieAtom";
import { trailersAtom } from "../../../utils/recoil-atoms/trailersAtom";
import useFetchTrailerLink from "../../../utils/hooks/useFetchTrailer";

const Hero: React.FC = () => {
  useFetchTrailerLink();
  const { trending } = useRecoilValue(movieAtom);
  const { link, randomIndex } = useRecoilValue(trailersAtom);

  if (!trending || trending.length === 0 || randomIndex === -1) return null;

  const { title, name, overview } = trending[randomIndex];

  return (
    <>
      <section className="relative h-[90vh] flex flex-col items-start justify-center">
        <div className="relative w-full min-h-screen overflow-hidden aspect-video">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${link}?autoplay=1&controls=0&showinfo=0&rel=0&modestbranding=1&mute=1&vq=hd720`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full min-h-screen scale-x-[1.35] scale-y-[1.35]"
          ></iframe>
        </div>

        <div className="absolute bottom-40 left-20 p-5 text-gray-100">
          <h1 className="text-6xl font-bold w-1/2">{title || name}</h1>
          <p className="mt-2 w-1/2">{overview}</p>
        </div>

        <div className="absolute bottom-24 left-24 flex gap-4">
          <button className="bg-slate-100 hover:bg-slate-200 hover:opacity-95 text-black font-bold px-10 py-4 rounded flex items-center justify-center transition duration-200 ease-in-out">
            <IoPlaySharp className="text-3xl" />
            <span className="text-2xl font-semibold ml-3">Play</span>
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 opacity-80 text-gray-100 font-bold px-10 py-4 rounded flex items-center justify-center transition duration-200 ease-in-out">
            <AiOutlineInfoCircle className="text-3xl" />
            <span className="text-lg font-semibold ml-3">Read More</span>
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
