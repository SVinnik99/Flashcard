import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { readDeck, deleteCard, deleteDeck } from "../../utils/api";
import { useEffect, useState } from "react";
import { element } from "prop-types";
function DeckView() {
  const [cards, setCards] = useState([]);
  const [deck, setDeck] = useState([]);
  const history = useHistory();

  const { deckId } = useParams();

  useEffect(() => {
    readDeck(deckId).then(setDeck);

    fetch(`http://localhost:8080/cards?deckId=${deckId}`)
      .then((response) => response.json())
      .then(setCards);
  }, []);

  return (
    <>
      <Card>
        <Card.Header as="h5">{deck.name}</Card.Header>
        <Card.Body>
          <Card.Text>{deck.description}</Card.Text>
          <Link to={``}>
            <Button variant="secondary">Edit</Button>
          </Link>
          <Link exact to={`/decks/${deck.id}/study`}>
            <Button variant="primary">Study</Button>
          </Link>
          <Link to={`/decks/${deckId}/cards/new`}>
            <Button variant="primary">Add Cards</Button>
          </Link>

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
          <Card key={index}>
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">Front</Card.Subtitle>
              <Card.Text>{card.front}</Card.Text>
              <Card.Subtitle className="mb-2 text-muted">Back</Card.Subtitle>
              <Card.Text>{card.back}</Card.Text>
              <Button variant="primary">Edit</Button>
              <Button
                variant="danger"
                onClick={() => deleteCard(card.id).then(window.confirm())}
              >
                Delete
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default DeckView;
