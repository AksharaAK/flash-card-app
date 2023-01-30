import Card from "./Card/Card";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";

export const FlippableCard = () => {
  const [showFront, setShowFront] = useState(true);

  const onClickHandler = () => {
    setShowFront(!showFront);
  };

  return (
    <div className="flippable-card-container" class="h-96 w-64 perspective">
      <CSSTransition in={showFront} classNames="flip" timeout={300}>
        <Card onClick={onClickHandler} />
      </CSSTransition>
    </div>
  );
};

export default FlippableCard;
