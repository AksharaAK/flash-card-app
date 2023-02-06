import Card from "./Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { ASIA as SAMPLE } from "../data/mockAS";

export const Quiz = ({ continent }) => {
  const [flashcards, setFlashcards] = useState(SAMPLE);
  const baseUrl = "https://country-facts.p.rapidapi.com/region";
  const url = `/${continent}`;

  useEffect(() => {
    const fetchUsers = async () => {
      const options = {
        method: "GET",
        baseURL: baseUrl,
        url: url,
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPIKEY,
          "X-RapidAPI-Host": process.env.REACT_APP_RAPIDAPIHOST,
        },
      };
      try {
        const res = await axios.request(options);
        console.log(res.data);
        setFlashcards(
          res.data.map((countryItem, index) => {
            return {
              id: index,
              country: countryItem.name.common,
              capital: countryItem.capital,
              flag: countryItem.flag,
            };
          })
        );
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, [url]);

  return (
    <div class="border-box relative flex h-screen w-screen flex-col overflow-scroll ">
      <div class="mx-auto grid w-full max-w-5xl items-center justify-center gap-5 py-10 my-grid-template-col">
        {flashcards.map((flashcard) => {
          return <Card flashcard={flashcard} />;
        })}
      </div>
    </div>
  );
};

export default Quiz;
