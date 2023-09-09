import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import Deck from "./Deck";
import DeckView from "./DeckView";
import { Route } from "react-router-dom";

function Decks({ decks,deleteDeck }) {
  return (
    <>
      {decks.map((deck, index) => {
        return <Deck deck={deck} deleteDeck={deleteDeck} key={index} />;
      })}

      <Route path="/decks/:deckId">
        <DeckView decks={decks} />
      </Route>
    </>
  );
}

export default Decks;
