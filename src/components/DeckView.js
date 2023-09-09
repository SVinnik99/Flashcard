import { Button, Card } from "react-bootstrap";
import { Link,useParams } from "react-router-dom"

function DeckView({decks}) {

    const {deckId} = useParams();

    const deck = decks.find((deck)=>`${deck.id}` === deckId)

    console.log(deck)

  return (
    <>
      
        <Card>
          <Card.Body>
            <Card.Title>{deck.name}</Card.Title>
            <Card.Text>{deck.description}</Card.Text>
            <Link to="decks/deckId"><Button variant="secondary">View</Button></Link>
            <Button variant="primary">Study</Button>
            <Button variant="danger">Delete</Button>
          </Card.Body>
        </Card>
      
    </>
  );
}

export default DeckView