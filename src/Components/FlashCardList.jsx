import FlagCard from "./Card/FlagCard";
import CapitalCard from "./Card/CapitalCard";

export const FlashCardList = ({ flashcards }) => {
  return (
    <div class="grid items-center gap-5 my-grid-template-col">
      {flashcards.map((flashcard) => {
        return <CapitalCard flashcard={flashcard} key={flashcard.id} />;
      })}
    </div>
  );
};

export default FlashCardList;
