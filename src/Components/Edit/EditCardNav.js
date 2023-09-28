import { Link } from "react-router-dom/cjs/react-router-dom.min";




function EditCardNav({deck,card}){

return(
    <nav>
         <Link to="/">Home /</Link> <Link to={`/decks/${deck.id}`}> {deck.name} /</Link> Edit Card {card.id}
    </nav>
)
   
}

export default EditCardNav;