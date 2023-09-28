// The path to this screen should include the deckId (i.e., /decks/:deckId/edit).
// You must use the readDeck() function from src/utils/api/index.js to load the existing deck.
// There is a breadcrumb navigation bar with a link to home /, followed by the name of the deck being edited, and finally the text Edit Deck (e.g., Home/Rendering in React/Edit Deck).
// It displays the same form as the Create Deck screen, except it is prefilled with information for the existing deck.
// The user can edit and update the form.
// If the user clicks Cancel, the user is taken to the Deck screen.

import { useEffect } from "react";
import { readDeck, updateDeck } from "../../utils/api";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import EditDeckNav from "./EditDeckNav";


function EditDeck() {

    const [deck, setDeck] = useState([])
    const { deckId } = useParams()
    const [formData,setFormData] = useState({
        name:"",
        description:""
    })

    const history = useHistory()

    useEffect(() => {
        async function fetchDeck() {
            const response = await readDeck(deckId)
            setDeck(response)
            console.log(response)
            setFormData({
                name:response.name,
                description:response.description,
                id:response.id
            })
        }
        fetchDeck()
    }, [])


    const handleSubmit= async (event)=>{
        event.preventDefault()
        await updateDeck(formData)
        history.push(`/decks/${deckId}`)
    }


    const handleChange = ({target}) => {
        setFormData({
            ...formData,
            [target.name]:target.value
        })
    }

    console.log(formData)

    return (

        <>
            <EditDeckNav deck={deck} />q
            <div>
                <h1>Edit Deck</h1>
                <form onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={formData.name}
                    />
                    <label>Description</label>
                    <textarea
                        id="description"
                        type="text"
                        name="description"
                        onChange={handleChange}
                        value={formData.description}
                    />

                    <button type="button" onClick={() => history.push(`/decks/${deck.id}`)}>
                        Cancel
                    </button>

                    <button type="submit" >Submit</button>
                </form>
            </div>
        </>

    )

}

export default EditDeck;