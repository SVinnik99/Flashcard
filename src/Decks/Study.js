import React from "react";
import '../App.css';

function Study({ deck = {} }) {
  return (
    <>
      <div className="card p-4">
        <h2>Card {deck.cards[0].id} of {deck.cards.length}</h2>
        <p>{deck.cards[0].front}</p>
        <button>Flip</button>
      </div>
    </>
  )
}


export default Study;
