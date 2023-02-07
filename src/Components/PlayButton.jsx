export const PlayButton = ({ onPlayClick }) => {
  return (
    <div class="m-1 cursor-pointer" onClick={onPlayClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#9d30b3"
        className="h-6 w-6 cursor-pointer"
      >
        <path
          fillRule="evenodd"
          d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default PlayButton;