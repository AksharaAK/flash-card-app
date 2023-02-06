import { useState } from "react";

export const Card = ({ flashcard }) => {
  const [flip, setFlip] = useState(false);

  return (
    <div
      class={`relative m-4 flex h-36 cursor-pointer rounded-lg shadow-2xl shadow-black/40  duration-500 preserve-3d perspective hover:shadow-black/80 ${
        flip ? "my-rotate-y-180" : ""
      } `}
      onClick={() => setFlip(!flip)}
    >
      <div
        class={`relative flex h-full w-full items-center justify-center rounded-lg bg-black/40  p-2 font-semibold  `}
      >
        <div class="absolute inset-0">
          <img
            alt="flag of the country"
            src={flashcard.flag}
            class="object-stretch absolute h-full w-full rounded-lg  shadow-2xl shadow-black/40"
          />
        </div>
      </div>
      <div class="absolute flex h-full w-full items-center  justify-center  rounded-lg bg-black/50 p-2 text-center text-xl font-bold uppercase tracking-widest text-white my-rotate-y-180 backface-hidden">
        {flashcard.country}
      </div>
    </div>
  );
};

export default Card;
