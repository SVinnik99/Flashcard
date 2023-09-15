import React from "react";
import '../App.css';

function Deck({ deck }) {
  return (
    <>
      <div className="card p-4">
        <div className="d-flex justify-content-between">
          <h2>{deck.name}</h2>
          <span>{deck.cards.length} cards</span>
        </div>

        <div>
          <p>{deck.description}</p>
        </div>


        <div>
          <button className="btn btn-primary">View</button>
          <button className="btn btn-secondary">Study</button>
          <button className="btn btn-danger">Trash Can</button>
        </div>
      </div>
    </>
  )
}


export default Deck;
