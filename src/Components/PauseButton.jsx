export const PauseButton = ({ onPauseClick }) => {
  return (
    <div class="m-1 cursor-pointer" onClick={onPauseClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#9d30b3"
        className="h-6 w-6"
      >
        <path
          fillRule="evenodd"
          d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default PauseButton;
