import { useEffect, useState } from "react";
import FlashCardList from "./Components/FlashCardList";
import Header2 from "./Components/Header2";
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
        "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPIKEY,
        // "X-RapidAPI-Key": "7fec653832msh3598ae6f97aaed0p126b5bjsn0b39a061f565",
        "X-RapidAPI-Host": process.env.REACT_APP_RAPIDAPIHOST,
        // "X-RapidAPI-Host": "country-facts.p.rapidapi.com",
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

  // src/App.js public/bg_images/pexels1.jpeg
  return (
    <div class="border-box bg-fit flex h-screen w-screen flex-col overflow-scroll bg-cover bg-center my-bg-capitals-hero">
      <div class="relative h-full w-full ">
        <Header />
        <FlashCardList flashcards={flashcards} />
      </div>
    </div>
  );
}
