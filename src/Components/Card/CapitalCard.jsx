import { useState } from "react";

export const Card = ({ flashcard }) => {
  const [flip, setFlip] = useState(false);
  console.log(flashcard.flag);

  return (
    <div
      class={`relative m-2 flex h-36 cursor-pointer rounded-lg  border-red-900 shadow-2xl shadow-black/50 duration-500 preserve-3d perspective hover:shadow-black/80 ${
        flip ? "my-rotate-y-180" : ""
      } `}
      onClick={() => setFlip(!flip)}
    >
      <div
        class={`absolute flex h-full w-full items-center justify-center rounded-lg bg-sky-300  p-2 font-semibold backface-hidden`}
      >
        {flashcard.country}
      </div>
      <div
        class={`  absolute flex h-full w-full items-center justify-center rounded-lg bg-green-300 p-2 my-rotate-y-180 backface-hidden`}
      >
        {flashcard.capital}
      </div>
    </div>
  );
};

export default Card;
