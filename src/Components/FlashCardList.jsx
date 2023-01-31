import Card from "./Card/Card";

export const FlashCardList = ({ flashcards }) => {
  return (
    <div class="grid items-center gap-5 my-grid-template-col">
      {flashcards.map((flashcard) => {
        return <Card flashcard={flashcard} key={flashcard.id} />;
      })}
    </div>
  );
};

export default FlashCardList;
