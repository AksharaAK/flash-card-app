export const ContinentPicker = ({ continent, continentChangeHandler }) => {
  return (
    <div class="border-box h-full w-full bg-black/40 p-5 text-center text-xs text-slate-300">
      <div class="mx-auto flex max-w-2xl justify-center">
        <label htmlFor="continentSelection">Choose a Continent to Study</label>
        <select
          id="continentSelection"
          class="mx-3 w-fit border-2 border-overlay-pink/80 bg-black px-5  text-slate-400"
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
    </div>
  );
};

export default ContinentPicker;
