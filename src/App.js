import { useEffect, useState } from "react";
import FlashCardList from "./Components/FlashCardList";
import Header from "./Components/Header";
import SAMPLE from "./data/mock_data";

export default function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE);

  return (
    <div class="border-box flex h-screen w-screen flex-col overflow-scroll p-5">
      <Header />
      <FlashCardList flashcards={flashcards} />
    </div>
  );
}
