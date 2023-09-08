import { Button } from "react-bootstrap";
import { Link } from "react-router-dom"

function CreateDeckButton() {
  return (
    <>
      <Link to="/decks/new"><Button variant="secondary">Create Deck</Button>{" "}</Link>
    </>
  );
}

export default CreateDeckButton;
