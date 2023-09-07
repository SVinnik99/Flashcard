import { Button, Card } from "react-bootstrap";
import {Link} from "react-router-dom"
import React from "react";


function Study({ deck }) {
  return (
    <>
      <Card style={{ width: "40rem" }}>
        <Card.Body>
          <Card.Title>{deck.name}</Card.Title>
          <Card.Text>{deck.name}</Card.Text>
          <Button variant="secondary">View</Button>
          <Link >
            <Button variant="primary">Study</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default Study;
