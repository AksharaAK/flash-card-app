import TimerContainer from "./TimerContainer";

export const ContinentPicker = ({ continent, continentChangeHandler }) => {
  return (
    <div class="border-box text-black-300 flex h-full w-full flex-col items-center bg-black/30 p-2 text-center text-xs sm:flex-row sm:justify-around sm:space-x-4">
      <div class="m-1 flex max-w-2xl flex-row sm:flex-col">
        <label htmlFor="continentSelection" class=" text-slate-400">
          Choose a Continent to Study:
        </label>
        <select
          id="continentSelection"
          class="m-1 w-fit border-2 border-icon-pink bg-black/30 px-5  text-slate-300"
          name="selectedContinent"
          value={continent}
          onChange={continentChangeHandler}
        >
          <option value="america">North and South America</option>
          <option value="africa">Africa</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
      <div class="m-1 flex">
        <TimerContainer />
      </div>
    </div>
  );
};

export default ContinentPicker;
