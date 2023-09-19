import React from "react";
import '../App.css';
import { Link } from "react-router-dom";


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

          <Link to={`/decks/${deck.id}/study`}>
            <button className="btn btn-secondary">Study</button>
          </Link>

          <button className="btn btn-danger">Trash Can</button>
        </div>
      </div>
    </>
  )
}


export default Deck;
