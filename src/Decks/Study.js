import React, { useEffect, useState } from "react"; import '../App.css';
import { useParams } from "react-router-dom";
import { readDeck } from "../utils/api";

function Study() {
  const deckId = useParams().id;
  let firstCard = [];

  const [deckSize, setDeckSize] = useState(0);
  const [deckName, setDeckName] = useState("");
  const [currentCard, setCurrentCard] = useState({});
  const [flippedStatus, setFlippedStatus] = useState(false);

  useEffect(() => {
    async function loadUser() {

      const deck = await readDeck(deckId);

      if (deck && deck.name) {
        setDeckName(deck.name);
        setDeckSize(deck.cards.length)
      } else {
        console.error("Deck or deck.name is undefined.");
      }

      [firstCard] = await deck.cards;
      setCurrentCard(firstCard);


    }
    loadUser();
  }, []);


  return (
    <>
      <h1>Study {deckName}</h1>

      <div className="card p-4">
        <h3>Card {currentCard.id} of {deckSize}</h3>
        <p>{currentCard.front}</p>

        <button className="btn btn-secondary btn-sm option-button">Flip</button>

      </div>
    </>
  )
}




export default Study;
