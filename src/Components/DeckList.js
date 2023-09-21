import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteCard } from '../utils/api';
import { Link, useHistory } from "react-router-dom"

function DeckList({ setDecks, decks, deleteDeck }) {

  const history = useHistory()


  //First display a message to confirm the delete
  //Then if confirmed, wait for the deck to delete
  //Update the decks by filtering out the deck thats been deleted
  //Then return to the home page
  const handleDelete = async (deck) => {  // the "async" allows you to await the deleteDeck later

    const confirmDelete = window.confirm('Delete this deck?\n\nYou will not be able to recover this.')

    if (confirmDelete) {

      await deleteDeck(deck.id)
      setDecks(decks.filter((element) => element.id !== deck.id)) // pretty much resetting the deck, minus the deck you just deleted
      history.push("/")

    }
  }

  return (
    <>
      {decks.map((deck, index) => (
        <Card key={index}>
          <Card.Header as="h5">{deck.name}</Card.Header>
          <Card.Body>
            <Card.Text>
              {deck.description}
            </Card.Text>
            <Link to={`/decks/${deck.id}`}><Button variant="secondary">View</Button></Link>
            <Link to={`/decks/${deck.id}/study`}><Button variant="primary">Study</Button></Link>
            <Button variant="danger" onClick={() => handleDelete(deck)}>Delete</Button>
          </Card.Body>
        </Card>

      ))}
    </>
  );
}

export default DeckList;
