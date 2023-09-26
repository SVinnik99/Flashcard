// The path to this screen should include the deckId and the cardId (i.e., /decks/:deckId/cards/:cardId/edit).
// You must use the readDeck() function from src/utils/api/index.js to load the deck that contains the card to be edited. Additionally, you must use the readCard() function from src/utils/api/index.js to load the card that you want to edit.
// There is a breadcrumb navigation bar with a link to home /, followed by the name of the deck of which the edited card is a member, and finally the text Edit Card :cardId (e.g., Home/Deck React Router/Edit Card 4).
// It displays the same form as the Add Card screen, except it is prefilled with information for the existing card. It can be edited and updated.
// If the user clicks on either Save or Cancel, the user is taken to the Deck screen.

import { useEffect, useState } from "react";
import { readDeck, readCard, updateCard } from "../../utils/api";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";

function EditCard() {
  const [deck, setDeck] = useState([]);
  const [card, setCard] = useState([]);
  const history = useHistory();
  const { deckId } = useParams();
  const { cardId } = useParams();

  const [formData, setFormData] = useState({});

  useEffect(() => {
    async function fetchDeck() {
      const response = await readDeck(deckId);

      setDeck(response);
    }

    fetchDeck();
  }, []);

  console.log(formData);

  useEffect(() => {
    async function fetchCard() {
      const response = await readCard(cardId);
      setCard(response);
      setFormData({
        front: response.front,
        back: response.back,
        id: response.id,
        deckId: deckId,
      });
    }

    fetchCard();
  }, []);

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    updateCard(formData).then(history.push(`/decks/${deckId}`));
  };

  // create form with front/back text area
  // set initial formData to the cards current text
  //have cancel/save button
  //

  return (
    <>
      <h1>Edit Card</h1>
      <div>
        {formData.front && formData.back ? (
          <form onSubmit={handleSubmit}>
            <label>Front</label>
            <textarea
              name="front"
              type="text"
              id="front"
              value={formData.front}
              onChange={handleChange}
            />
            <label>Back</label>
            <textarea
              name="back"
              type="text"
              id="back"
              value={formData.back}
              onChange={handleChange}
            />

            <button
              type="button"
              onClick={() => history.push(`/decks/${deckId}`)}
            >
              Cancel
            </button>
            <button type="submit">Save</button>
          </form>
        ) : (
          <p>loading</p>
        )}
      </div>
    </>
  );
}

export default EditCard;
