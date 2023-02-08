import Card from "./Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { mockData } from "../data/mockData";
import { useQuery } from "@tanstack/react-query";

export const Quiz = ({ continent }) => {
  const [flashcards, setFlashcards] = useState(mockData);
  const baseUrl = "https://country-facts.p.rapidapi.com/region";
  const url = `/${continent}`;

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
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const populateCards = (data) => {
    setFlashcards(
      data.map((countryItem, index) => {
        return {
          id: index,
          country: countryItem.name.common,
          capital: countryItem.capital.map((city) => `${city}\n`),
          flag: countryItem.flag,
        };
      })
    );
  };

  const { data, status } = useQuery([`country${continent}`], fetchUsers, {
    onError: (error) => console.log(error),
    staleTime: 24 * 60 * 60 * 1000,
    cacheTime: 24 * 60 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (status === "success") populateCards(data);
  }, [data, status]);

  return (
    <div class="border-box relative flex h-screen w-screen flex-col overflow-scroll ">
      <div class="mx-auto grid w-full max-w-5xl items-center justify-center gap-5 py-10 my-grid-template-col">
        {flashcards.map((flashcard) => {
          return <Card flashcard={flashcard} key={flashcard.id} />;
        })}
      </div>
    </div>
  );
};

export default Quiz;
