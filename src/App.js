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
        "X-RapidAPI-Key": "034a24fad4msh8b68ad16be3f3e1p16ce27jsn72fc68a8d3c0",
        "X-RapidAPI-Host": "country-facts.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((response) => {
        setFlashcards(
          response.data.map((countryItem, index) => {
            return {
              id: index,
              question: countryItem.name.common,
              answer: countryItem.capital,
            };
          })
        );
        console.log(response.data);
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
