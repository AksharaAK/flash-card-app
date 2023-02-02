import { useEffect, useState } from "react";
import Header from "./Components/Header";
import SAMPLE from "./data/mock_data";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import { ContinentPicker } from "./Components/ContinentPicker";
import FlagQuiz from "./Components/FlagQuiz";
import CapitalsQuiz from "./Components/CapitalsQuiz";

export default function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE);

  const [continent, setContinent] = useState("america");
  const continentChangeHandler = (e) => {
    setContinent(e.target.value);
  };

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://country-facts.p.rapidapi.com/region/${continent}`,
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPIKEY,
        "X-RapidAPI-Host": process.env.REACT_APP_RAPIDAPIHOST,
      },
    };

    axios
      .request(options)
      .then((response) => {
        setFlashcards(
          response.data.map((countryItem, index) => {
            return {
              id: index,
              country: countryItem.name.common,
              capital: countryItem.capital,
              flag: countryItem.flag,
            };
          })
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }, [continent]);

  return (
    <div>
      <Header />
      <ContinentPicker
        continent={continent}
        continentChangeHandler={continentChangeHandler}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FlagQuiz flashcards={flashcards} />} />
        </Routes>
        <Routes>
          <Route path="/flags" element={<FlagQuiz flashcards={flashcards} />} />
        </Routes>
        <Routes>
          <Route
            path="/capitals"
            element={<CapitalsQuiz flashcards={flashcards} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
