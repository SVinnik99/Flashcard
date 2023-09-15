import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { readDeck, readCard } from "../utils/api";
import { useEffect, useState } from "react";
function DeckView({ decks, deleteDeck }) {
  const [cards, setCards] = useState([]);
  const history = useHistory();
  const { deckId } = useParams();

  const deck = decks.find((deck) => `${deck.id}` === deckId);

  useEffect(() => {
    const url = `http://localhost:8080/cards?deckId=${deckId}`;

    fetch(url)
      .then((response) => response.json())
      .then(setCards);
  }, []);

  console.log(cards);

  return (
    <>
      <Card>
        <Card.Header as="h5">{deck.name}</Card.Header>
        <Card.Body>
          <Card.Text>{deck.description}</Card.Text>
          <Link to={``}>
            <Button variant="secondary">Edit</Button>
          </Link>
          <Link to={`/decks/${deck.id}/study`}><Button variant="primary">Study</Button></Link>
          <Button variant="primary">Add Cards</Button>
          <Button
            variant="danger"
            onClick={() => deleteDeck(deck.id).then(history.push("/"))}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>

      <h1>Cards</h1>

      <div>
        {cards.map((card, index) => (
          <Card>
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">Front</Card.Subtitle>
              <Card.Text>{card.front}</Card.Text>
              <Card.Subtitle className="mb-2 text-muted">Back</Card.Subtitle>
              <Card.Text>{card.back}</Card.Text>
              <Button variant="primary">Edit</Button>
              <Button variant="danger">Delete</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default DeckView;
