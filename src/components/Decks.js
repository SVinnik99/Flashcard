import Deck from "./Deck";

function Decks({ decks, deleteDeck }) {
  return (
    <>
      {decks.map((deck, index) => {
        return <Deck deck={deck} deleteDeck={deleteDeck} key={index} />;
      })}
    </>
  );
}

export default Decks;
