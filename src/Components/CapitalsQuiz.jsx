import CapitalCard from "./Card/CapitalCard";

export const CapitalsQuiz = ({ flashcards }) => {
  return (
    <div class="border-box bg-fit flex h-screen w-screen flex-col overflow-scroll  bg-cover bg-center my-bg-capitals-hero">
      <div class="relative h-screen w-screen">
        <div class="mx-auto grid w-full max-w-5xl items-center justify-center gap-5 py-10 my-grid-template-col">
          {flashcards.map((flashcard) => {
            return <CapitalCard flashcard={flashcard} key={flashcard.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CapitalsQuiz;
