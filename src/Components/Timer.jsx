import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const Timer = ({ percentVal, mins, secs, mode }) => {
  const purple = " #9d30b3";
  const green = "#388e3c";
  const grey = "94a3b8";

  return (
    <div class=" mx-2 flex items-center">
      <div class="mt-[1.5px] h-7 w-7">
        <CircularProgressbar
          value={percentVal}
          strokeWidth={25}
          styles={buildStyles({
            pathColor: mode === "work" ? purple : green,
            trailColor: grey,
          })}
        />
      </div>
      <span class="p-2 font-bold">{mins + ":" + secs}</span>
    </div>
  );
};

export default Timer;
