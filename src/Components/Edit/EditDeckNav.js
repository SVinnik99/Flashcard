import { Link } from "react-router-dom/cjs/react-router-dom.min";



function EditDeckNav({deck}){

    return(
        <nav>

            <Link to="/">Home / </Link> <Link to={`/decks/${deck.id}`}>{deck.name}</Link> / Edit Deck 
        </nav>
    )
}

export default EditDeckNav;