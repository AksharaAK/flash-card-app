import { useState } from "react";

export const Card = ({ flashcard }) => {
  const [flip, setFlip] = useState(false);
  console.log(flashcard.flag);

  return (
    <div
      class={`relative m-2 flex h-36 cursor-pointer rounded-lg  border-red-900 shadow-2xl shadow-black/40 duration-500 preserve-3d perspective hover:shadow-black/80 ${
        flip ? "my-rotate-y-180" : ""
      } `}
      onClick={() => setFlip(!flip)}
    >
      <div
        class={`relative flex h-full w-full items-center justify-center rounded-lg p-2 font-semibold  `}
      >
        <div class="absolute inset-0">
          <img
            alt="flag of the country"
            src={flashcard.flag}
            class="absolute h-full w-full rounded-lg object-cover shadow-2xl shadow-black/40"
          />
        </div>
        <div class="absolute items-center justify-center text-center backface-hidden"></div>
      </div>
      <div class="absolute flex h-full w-full items-center justify-center rounded-lg bg-black/60 p-2 text-center text-2xl font-semibold text-slate-200 my-rotate-y-180 backface-hidden">
        {flashcard.country}
      </div>
    </div>
  );
};

export default Card;
