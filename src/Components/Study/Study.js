import { useParams, useHistory, Link } from "react-router-dom";
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



   // !this code was causing tests not to pass
  //------------------------------------------
  // useEffect(() => {
  //   async function fetchDeck(){
  //     const response = await readDeck(deckId)
  //     setDeck(deckId)
  //   }
  //   fetchDeck() 
  // }, []);

  //------------------------------------------
  useEffect(() => {
    async function fetchData() {
      const abortController = new AbortController();
      const response = await readDeck(deckId, abortController.signal);
      setDeck(response);
      setCards(response.cards);
      return () => abortController.abort();
    }
    fetchData();
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
              <div key={card.id}>
                <h1>Study: {deck.name}</h1>
                <Card>
                  <Card.Body>
                    <Card.Title>
                      <h3>{`Card ${index + 1} of ${cards.length}`}</h3>
                    </Card.Title>

                    <Card.Text>{front ? card.front : card.back}</Card.Text>
                    <Button variant="secondary" onClick={flipCard}>
                      Flip
                    </Button>
                    {showNextButton(cards, index)}
                  </Card.Body>
                </Card>
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
        <Link
          to={`/decks/${deck.id}/cards/new`}
        >
          <button>Add Cards</button>
        </Link>
      </div>
    );
  }


 
    return (

  
      <div>
        <StudyNavBar />
  
        <div>
          {console.log(cards.length)}
  
          
  
          {cards.length === 0
            ? notEnoughCards()
            : cards.length > 2
            ? enoughCards()
            : notEnoughCards()}
        </div>
      </div>
    );

  
  
}

export default Study;




// import React, { useEffect, useState } from "react";
// import { Link, useParams, useHistory } from "react-router-dom";
// import { readDeck } from "../../utils/api";
// import StudyNavBar from "./StudyNavBar"

// function Study() {
//   const history = useHistory();
//   const { deckId } = useParams();
//   const [deck, setDeck] = useState({});
//   const [cards, setCards] = useState([]);
//   const [cardNum, setCardNum] = useState(1);
//   const [front, isFront] = useState(true);

//   useEffect(() => {
//     async function fetchData() {
//       const abortController = new AbortController();
//       const response = await readDeck(deckId, abortController.signal);
//       setDeck(response);
//       setCards(response.cards);
//       return () => abortController.abort();
//     }
//     fetchData();
//   }, []);

//   // "Next" handler
//   function nextCard(index, total) {
//     console.log(index);
//     if (index < total) {
//       setCardNum(cardNum + 1);
//       isFront(true);
//     } else {
//       if (
//         window.confirm(
//           `Restart cards?\n\nClick 'cancel' to return to the home page`
//         )
//       ) {
//         setCardNum(1);
//         isFront(true);
//       } else {
//         history.push("/");
//       }
//     }
//   }

//   // "Flip" handler
//   function flipCard() {
//     if (front) {
//       isFront(false);
//     } else {
//       isFront(true);
//     }
//   }

//   // Determine whether "Next" button should be shown.
//   function showNextButton(cards, index) {
//     if (front) {
//       return null;
//     } else {
//       return (
//         <button
//           onClick={() => nextCard(index + 1, cards.length)}
//         >
//           Next
//         </button>
//       );
//     }
//   }

//   // Are there enough cards in the deck?
//   function enoughCards() {
//     return (
//       <div className="card">
//         {cards.map((card, index) => {
//           if (index === cardNum - 1) {
//             return (
//               <div className="card-body" key={card.id}>
//                 <h3 className="card-title">
//                   {`Card ${index + 1} of ${cards.length}`}
//                 </h3>
//                 <div className="card-text">
//                   {front ? card.front : card.back}
//                 </div>
//                 <br />
//                 <button onClick={flipCard}>
//                   Flip
//                 </button>
//                 {showNextButton(cards, index)}
//               </div>
//             );
//           }
//         })}
//       </div>
//     );
//   }

//   // If there are not enough cards in the deck:
//   function notEnoughCards() {
//     return (
//       <div>
//         <h2>Not enough cards.</h2>
//         <p>
//           You need at least 3 cards to study. There are {cards.length} cards in
//           this deck.
//         </p>
//         <Link
//           to={`/decks/${deck.id}/cards/new`}
//           >
//           <button>Add Cards</button>
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <StudyNavBar />
//       <br />
//       <div>
//         <h2>{`${deck.name}: Study`}</h2>
//         <br />
//         <div>
//           {cards.length === 0
//             ? notEnoughCards()
//             : cards.length > 2
//             ? enoughCards()
//             : notEnoughCards()}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Study;