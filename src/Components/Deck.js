import DeckList from "./DeckList";
import { Route } from "react-router-dom"


function Deck({decks}) {
  return (
    <>
    
      <Route path={"/"}>
        <DeckList decks={decks} />
      </Route>
    </>
  );
}

export default Deck;
