import { Link } from "react-router-dom";
import "./NewDeck.css";

function NewDeck() {
  return (
    <div>
      <h1>Create Deck</h1>
      <form>
        <label>
          Name
        </label>
        <input type="text" name="name" />
        <label>
          Description
        </label>
        <textarea type="text" name="description" />
      </form>
      <Link to="/">
        <button>Cancel</button>
      </Link>
      <button>Submit</button>
    </div>
  );
}

export default NewDeck;
