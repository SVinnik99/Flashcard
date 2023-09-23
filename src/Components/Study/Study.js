import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { readDeck } from "../../utils/api";
import StudyNavBar from "./StudyNavBar";

function Study() {
  const { deckId } = useParams();
  const [cards, setCards] = useState([]);
  const [deck, setDeck] = useState({});
  const [front, isFront] = useState(true);
  const [cardNum, setCardNum] = useState(1);

  const history = useHistory();

  useEffect(() => {
    readDeck(deckId).then(setDeck);
  }, []);

  useEffect(() => {
    const url = `http://localhost:8080/cards?deckId=${deckId}`;

    async function fetchCards() {
      const response = await fetch(url);
      const cardsFromAPI = await response.json();

      setCards(cardsFromAPI);
    }
    fetchCards();
  }, []);

  // "Next" button handler
  function nextCard(index, total) {
    if (index < total) {
      setCardNum(cardNum + 1);
      isFront(true);
    } else {
      if (
        window.confirm(
          "Restart Card?\n\nClick 'cancel' to return to the home page."
        )
      ) {
        isFront(true);
        setCardNum(1);
      } else {
        history.push("/");
      }
    }
  }

  // "Flip" button handler
  function flipCard() {
    if (front) {
      isFront(false);
    } else {
      isFront(true);
    }
  }

  // when should I show the next button ?
  // if the card is on front return null, else return next button
  // next button uses the nextCard function, index + 1, cards.length
  function showNextButton(cards, index) {
    if (front) {
      return null;
    } else {
      return (
        <Button
          variant="primary"
          onClick={() => nextCard(index + 1, cards.length)}
        >
          Next
        </Button>
      );
    }
  }

  function enoughCards() {
    return (
      <>
        {cards.map((card, index) => {
          if (index === cardNum - 1) {
            return (
              <div>
                <h1>Study: {deck.name}</h1>

                <div>
                  <Card>
                    <Card.Body>
                      <Card.Title>
                        Card {index + 1} of {cards.length}
                      </Card.Title>

                      <Card.Text>{front ? card.front : card.back}</Card.Text>
                      <Button variant="secondary" onClick={flipCard}>
                        Flip
                      </Button>
                      {showNextButton(cards, index)}
                    </Card.Body>
                  </Card>
                </div>
              </div>
            );
          }
        })}
      </>
    );
  }

  function notEnoughCards() {
    return (
      <div>
        <h2>Not enough cards</h2>
        <p>
          You need atleast 3 cards to study. There are {cards.length} cards in
          this deck.
        </p>
      </div>
    );
  }

  return (
    <>
      <StudyNavBar />

      <div>
        {cards.length === 0
          ? notEnoughCards()
          : cards.length > 2
          ? enoughCards()
          : notEnoughCards()}
      </div>
    </>
  );
}

export default Study;
