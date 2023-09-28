

//Home/React Router/Add Card
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function AddCardsNav({deck}){


    return(
        <nav>
            <Link to="/">Home</Link><Link to={`/decks/${deck.id}`}>/ {deck.name}</Link> / Add Card
        </nav>
    )
}

export default AddCardsNav;