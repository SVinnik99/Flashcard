import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card,Button } from "react-bootstrap";

function Study({ decks }) {
  const [cards, setCards] = useState([]);
  const { deckId } = useParams();

  useEffect(() => {
    const url = `http://localhost:8080/cards?deckId=${deckId}`;

    fetch(url)
      .then((response) => response.json())
      .then(setCards);
  }, []);

  const deck = decks.find((deck) => `${deck.id}` === deckId);

  console.log(cards);


  return (
    <>
      <h1>Study: {deck.name}</h1>

      <div>
        <Card >
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
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
