import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom"

function Deck({ deck }) {


  return (
    <>
      
        <Card>
          <Card.Body>
            <Card.Title>{deck.name}</Card.Title>
            <Card.Text>{deck.description}</Card.Text>
            <Link to={`decks/${deck.id}`}><Button variant="secondary">View</Button></Link>
            <Button variant="primary">Study</Button>
            <Button variant="danger">Delete</Button>
          </Card.Body>
        </Card>

        
      
    </>
  );
}

export default Deck;
