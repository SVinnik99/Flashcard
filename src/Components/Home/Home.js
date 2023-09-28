
import Button from "react-bootstrap/Button";
import Deck from "../Deck/Deck";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


function Home({setDecks,decks,deleteDeck}) {

    return (

        <>
            <Link to="/decks/new">
                <Button>Create Deck</Button>
            </Link>

            <Deck setDecks={setDecks} decks={decks} deleteDeck={deleteDeck} />
        </>

    )
}

export default Home;