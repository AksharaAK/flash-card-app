import { useState } from "react";
import Header from "./Components/Header";
import { ContinentPicker } from "./Components/ContinentPicker";
import Quiz from "./Components/Quiz";
import SettingsContext from "./context/SettingsContext";

export default function App() {
  const [continent, setContinent] = useState("america");
  const continentChangeHandler = (e) => {
    setContinent(e.target.value);
  };

  const [workMins, setWorkMins] = useState(25);
  const [breakMins, setBreakMins] = useState(5);

  return (
    <div class={`bg-cover bg-center my-bg-hero`}>
      <Header />
      <SettingsContext.Provider
        value={{
          workMins,
          breakMins,
          setWorkMins,
          setBreakMins,
        }}
      >
        <ContinentPicker
          continent={continent}
          continentChangeHandler={continentChangeHandler}
        />

        <Quiz continent={continent} />
      </SettingsContext.Provider>
    </div>
  );
}
