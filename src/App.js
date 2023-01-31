import { useEffect, useState } from "react";
import FlashCardList from "./Components/FlashCardList";
import Header from "./Components/Header";
import SAMPLE from "./data/mock_data";
import axios from "axios";

export default function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://country-facts.p.rapidapi.com/region/america",
      headers: {
        "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
        "X-RapidAPI-Host": process.env.RAPIDAPI_HOST,
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
  }, []);

  return (
    <div class="border-box flex h-screen w-screen flex-col overflow-scroll p-5">
      <Header />
      <FlashCardList flashcards={flashcards} />
    </div>
  );
}
