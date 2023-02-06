import { useState } from "react";
import Header from "./Components/Header";
import { ContinentPicker } from "./Components/ContinentPicker";
import Quiz from "./Components/Quiz";

export default function App() {
  const [continent, setContinent] = useState("america");
  const continentChangeHandler = (e) => {
    setContinent(e.target.value);
  };

  return (
    <div class={`bg-cover bg-center my-bg-hero`}>
      <Header />
      <ContinentPicker
        continent={continent}
        continentChangeHandler={continentChangeHandler}
      />
      <Quiz continent={continent} />
    </div>
  );
}
