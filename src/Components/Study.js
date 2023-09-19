import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { readDeck } from "../utils/api";

function Study() {
  const [cards, setCards] = useState([]);
  const [deck, setDeck] = useState([]);
  const { deckId } = useParams();
  const [index, setIndex] = useState(0);



  useEffect(() => {
    readDeck(deckId).then(setDeck);
  }, []);


  useEffect(() => {
    const url = `http://localhost:8080/cards?deckId=${deckId}`;

    async function fetchCards() {
      try {
        const response = await fetch(url)
        const cardsFromAPI = response.json()

        setCards(cardsFromAPI)
        console.log(cards)


      } catch { }
    }
    fetchCards();

  }, []);


  return (

    <>
      {cards.id ? (<>
        <h1>Study: {deck.name}</h1>

        <div>
          <Card>
            <Card.Body>
              <Card.Title>
                Card {cards[index]} of {cards.length}
              </Card.Title>

              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="secondary">Flip</Button>
            </Card.Body>
          </Card>
        </div>
      </>)
        : (<h1>Loading...</h1>)

      }
    </>


  );

}




export default Study;
