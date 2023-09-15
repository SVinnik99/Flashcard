import React from "react";
import Deck from "./Deck";
import '../App.css';


function Decks({ decks }) {
  return (
    <>
      {
        decks.map((deck) => (
          <Deck deck={deck} />
        ))
      }
    </>
  )
}


// <div className="card p-4">
//   <h2>{deck.name}</h2>
//   <p>{deck.description}</p>
// </div>

export default Decks;
