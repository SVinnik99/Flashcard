import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteCard } from '../utils/api';
import {Link} from "react-router-dom"
function DeckList({ decks,deleteDeck}) {


  // const handleDelete = () => deleteCard().then(window.location.reload(false))

  
  
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
          <Button variant="danger" onClick={()=>deleteDeck(deck.id).then(window.location.reload(false))}>Delete</Button>
        </Card.Body>
      </Card>
      
      ))}
    </>
  );
}

export default DeckList;
