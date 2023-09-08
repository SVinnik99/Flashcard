
import Deck from "./Deck";

function Decks({decks}) {

    console.log(decks)
  return (
    <>
      
        {decks.map((deck, index) => {
          <Deck deck={deck} key={index}/>
        })}
      
    </>
  );
}

export default Decks;
