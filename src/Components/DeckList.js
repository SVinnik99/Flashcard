import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function DeckList({ decks }) {
  return (
    <>
      {decks.map((deck, index) => (
        <Card>
        <Card.Header as="h5">{deck.name}</Card.Header>
        <Card.Body>
          <Card.Text>
            {deck.description}
          </Card.Text>
          <Button variant="secondary">View</Button>
          <Button variant="primary">Study</Button>
          <Button variant="danger">Delete</Button>
        </Card.Body>
      </Card>
      ))}
    </>
  );
}

export default DeckList;
