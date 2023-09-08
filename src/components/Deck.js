import { Button, Card } from "react-bootstrap";

function Deck({ deck }) {
  //     <Card>
  //     <Card.Header as="h5">Featured</Card.Header>
  //     <Card.Body>
  //       <Card.Title>Special title treatment</Card.Title>
  //       <Card.Text>
  //         With supporting text below as a natural lead-in to additional content.
  //       </Card.Text>
  //       <Button variant="primary">Go somewhere</Button>
  //     </Card.Body>
  //   </Card>

  console.log(deck);
  return (
    <>
      <li>
        <Card>
          <Card.Body>
            <Card.Title>{deck.name}</Card.Title>
            <Card.Text>{deck.description}</Card.Text>
            <Button variant="secondary">View</Button>
            <Button variant="primary">Study</Button>
            <Button variant="danger">Delete</Button>
          </Card.Body>
        </Card>
      </li>
    </>
  );
}

export default Deck;
