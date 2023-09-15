import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { readDeck } from "../utils/api";

function Study() {
  const [cards, setCards] = useState([]);
  const [deck, setDeck] = useState([]);
  const { deckId } = useParams();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const url = `http://localhost:8080/cards?deckId=${deckId}`;

    fetch(url)
      .then((response) => response.json())
      .then(setCards);
  }, []);

  useEffect(() => {
    readDeck(deckId).then(setDeck);
  }, []);

  console.log(cards);

  return (
    <>
      <h1>Study: {deck.name}</h1>

      <div>
        <Card>
          <Card.Body>
            <Card.Title>
              Card {cards[count].id} of {cards.length}
            </Card.Title>
            
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="secondary">Flip</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Study;
