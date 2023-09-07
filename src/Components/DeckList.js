import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import {Link} from "react-router-dom"
import Study from "./Study";
import React from "react";


function Decks({decks} ) {

    //This displays the list of decks


    

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
                <Link to={`/decks/${deck.id}/study`}><Button variant="primary">Study</Button></Link>
              </Card.Body>
            </Card>
            
            <Study deck={deck} key={index}/>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Decks;
