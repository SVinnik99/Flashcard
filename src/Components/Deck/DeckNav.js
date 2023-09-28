import { Link } from "react-router-dom/cjs/react-router-dom.min";


function DeckNav({deck}){
    return (
        <nav>
            <Link to="/"> Home / </Link> {deck.name}
        </nav>
    )
}

export default DeckNav;