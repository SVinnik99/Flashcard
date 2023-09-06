import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

function Decks({ decks }) {
  return (
    <>
      <ul style={{listStyleType: "none"}}>
        {decks.map((deck, index) => (
          <li key={index}>
            <Card style={{ width: "40rem" }}>
              
              <Card.Body>
                <Card.Title>{deck.name}</Card.Title>
                <Card.Text>{deck.description}</Card.Text>
                <Button variant="secondary">View</Button>
                <Button variant="primary">Study</Button>
              </Card.Body>
            </Card>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Decks;
