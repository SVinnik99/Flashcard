import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { readDeck, deleteCard, deleteDeck } from "../../utils/api";
import { useEffect, useState } from "react";
import DeckNav from "./DeckNav";

function DeckView({setDecks,decks}) {
  const [cards, setCards] = useState([]);
  const [deck, setDeck] = useState([]);
  const history = useHistory();

  const { deckId } = useParams();


  // !this code was causing tests not to pass

  //------------------------------------------
  // useEffect(() => {
  //   readDeck(deckId).then(setDeck);

  //   fetch(`http://localhost:8080/cards?deckId=${deckId}`)
  //     .then((response) => response.json())
  //     .then(setCards);
  // }, []);

  //------------------------------------------

  useEffect(() => {
    async function fetchDeck() {
      const response = await readDeck(deckId)
      setDeck(response)
      setCards(response.cards)
    }
    fetchDeck()
  }, [])

  const handleCardDelete = async (card) => {
    const message = window.confirm(
      "Delete this card?\n\nYou will not be able to recover this."
    );

    if (message) {
      await deleteCard(card.id);

      setCards(cards.filter((element) => element.id !== card.id));
      history.push(`/decks/${deckId}`);
    }
  }

  const handleDeckDelete = async (deck) => {
    const message = window.confirm("Delete this deck?\n\n\You will not be able to recover this.")
    if (message) {
      await deleteDeck(deck.id)
      setDecks(decks.filter(element => element.id !== deck.id))
      history.push("/")
    }
  }
  return (
    <> 
    <DeckNav deck={deck}/>
      <Card>
        <Card.Header as="h5">{deck.name}</Card.Header>
        <Card.Body>
          <Card.Text>{deck.description}</Card.Text>
          <Link to={`/decks/${deckId}/edit`}>
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
            onClick={() => handleDeckDelete(deck)}
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
              <Link to={`/decks/${deck.id}/cards/${card.id}/edit`}><Button variant="primary">Edit</Button></Link>

              <Button variant="danger" onClick={() => handleCardDelete(card)}>
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
