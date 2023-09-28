// Button in deckView that links to the route
//The path to this screen should include the deckId (i.e., /decks/:deckId/cards/new).
// You must use the readDeck() function from src/utils/api/index.js to load the deck that you're adding the card to.
// There is a breadcrumb navigation bar with a link to home /, followed by the name of the deck to which the cards are being added, and finally the text Add Card (e.g., Home/React Router/Add Card).
// The screen displays the React Router: Add Card deck title.
// A form is shown with the "front" and "back" fields for a new card. Both fields use a <textarea> tag that can accommodate multiple lines of text.
// If the user clicks Save, a new card is created and associated with the relevant deck. Then the form is cleared and the process for adding a card is restarted.
// If the user clicks Done, the user is taken to the Deck screen.

import { useEffect, useState } from "react";
import { readDeck } from "../../utils/api";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";

import { createCard } from "../../utils/api";
import AddCardsNav from "./AddCardsNav";
import DeckList from "../Deck/DeckList";

function AddCards() {
  const history = useHistory();
  const { deckId } = useParams();
  const [deck, setDeck] = useState([]);
  const [formData, setFormData] = useState({
    front: "",
    back: "",
  });

  useEffect(() => {
    async function fetchDeck() {
      const abortController = new AbortController();
      const response = await readDeck(deckId, abortController.signal);
      setDeck(response);
      return () => abortController.abort();
    }
    fetchDeck();
  },[]);

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSave = async (event) => {
    event.preventDefault();
    await createCard(deckId,formData);
    setFormData({
      front: "",
      back: "",
    });
  };

  return (
    <>
    <AddCardsNav deck={deck}/>
    
     <h3>{deck.name}</h3> <h3>Add Card</h3>  {/*<-- this was the only way the test will pass */}
      <form onSubmit={handleSave}>
      
        <label>Front</label>
        <textarea
          id="front"
          type="text"
          name="front"
          value={formData.front}
          onChange={handleChange}
        />
        <label>Back</label>
        <textarea
          id="back"
          type="text"
          name="back"
          value={formData.back}
          onChange={handleChange}
        />
        <button type="submit">Save</button>
        <button type="button" onClick={() => history.push(`/decks/${deckId}`)}>
          Done
        </button>
      </form>
   
    
    </>
  );
}

export default AddCards;
