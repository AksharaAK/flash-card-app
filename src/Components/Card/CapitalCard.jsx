import { useState } from "react";

export const Card = ({ flashcard }) => {
  const [flip, setFlip] = useState(false);

  return (
    <div
      class={`relative m-2 flex h-36 cursor-pointer shadow-2xl shadow-black/40 duration-500 preserve-3d perspective hover:shadow-black/80 ${
        flip ? "my-rotate-x-180" : ""
      } `}
      onClick={() => setFlip(!flip)}
    >
      <div
        class={`absolute flex h-full w-full items-center justify-center bg-overlay-purple/60 p-2  text-xs font-semibold uppercase tracking-widest text-white backface-hidden`}
      >
        {flashcard.country}
      </div>
      <div
        class={` absolute flex h-full w-full items-center justify-center  bg-overlay-pink/70 p-2 text-lg uppercase tracking-widest text-white my-rotate-x-180 backface-hidden`}
      >
        {flashcard.capital}
      </div>
    </div>
  );
};

export default Card;
