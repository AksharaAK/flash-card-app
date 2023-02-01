import FlagCard from "./Card/FlagCard";
import CapitalCard from "./Card/CapitalCard";

export const FlashCardList = ({ flashcards }) => {
  return (
    <div class="mx-auto grid w-full max-w-5xl items-center justify-center gap-5 py-10 my-grid-template-col">
      {flashcards.map((flashcard) => {
        return <CapitalCard flashcard={flashcard} key={flashcard.id} />;
      })}
    </div>
  );
};

export default FlashCardList;
