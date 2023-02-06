import FlagCard from "../pages/FlagCard";
import CapitalCard from "../pages/CapitalCard";

export const Card = ({ flashcard }) => {
  let component;

  switch (window.location.pathname) {
    case "/":
      component = <FlagCard flashcard={flashcard} key={flashcard.id} />;
      break;

    case "/flags":
      component = <FlagCard flashcard={flashcard} key={flashcard.id} />;
      break;

    case "/capitals":
      component = <CapitalCard flashcard={flashcard} key={flashcard.id} />;
      break;

    default:
      break;
  }
  return <>{component}</>;
};

export default Card;
