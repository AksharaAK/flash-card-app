export const ContinentPicker = ({ continent, continentChangeHandler }) => {
  return (
    <div class="border-box mx-auto flex h-full w-full justify-around border-t-2 border-overlay-purple bg-black p-5 text-center text-xs text-slate-500">
      <label>
        Choose a Continent
        <select
          class="mx-3 w-fit border-2 border-overlay-pink bg-black px-5  text-slate-500"
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
      </label>
    </div>
  );
};

export default ContinentPicker;
