import { Link, useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import { readDeck } from "../../utils/api";

function StudyNavBar() {
  const [deck, setDeck] = useState([]);
  const { deckId } = useParams();

  useEffect(() => {
    async function fetchCards() {
      const response = await readDeck(deckId);

      setDeck(response);
    }
    fetchCards();
  }, []);

  console.log(deck);

  return (
    <nav>
      <Link to="/"> Home </Link>/ <Link to={`/decks/${deckId}`}> {deck.name}</Link> / Study
    </nav>
  );
}

export default StudyNavBar;
