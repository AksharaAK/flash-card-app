import "./CardTransition.css";

export const Card = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      class="shadow-black relative h-full w-full border-4 border-primary-blue bg-secondary-blue shadow-xl preserve-3d "
    >
      <div class="text-white absolute flex h-full w-full items-center justify-center bg-secondary-blue font-bold my-rotate-y-180 backface-hidden">
        NEW DELHI
      </div>
      <div class="text-white absolute flex h-full w-full items-center justify-center bg-neutral font-bold backface-hidden">
        INDIA
      </div>
    </div>
  );
};

export default Card;
