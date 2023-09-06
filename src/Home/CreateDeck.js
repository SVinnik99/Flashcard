

import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom"

function CreateDeck(){

    return (

       <Link to="/decks/new"><Button variant="secondary" size="lg">
       Create Deck
     </Button></Link> 

    )

}

export default CreateDeck;