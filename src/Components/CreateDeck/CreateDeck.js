import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import "./CreateDeck.css";
import CreateNavBar from "./CreateNavBar";
import { createDeck } from "../../utils/api";

function CreateDeck() {
  const history = useHistory();


  const initialFormData = {
    name: "",
    description: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });

    
  };

  const handleSubmit = (event) => {
    
    event.preventDefault()

    createDeck(formData).then(value => history.push(`/decks/${value.id}`))

    
  };

  return (
    <>
    <CreateNavBar/>
    <div>
      <h1>Create Deck</h1>
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

        <button type="button" onClick={() => history.push("/")}>
          Cancel
        </button>

        <button type="submit" >Submit</button>
      </form>
    </div>
    </>
    
  );
}

export default CreateDeck;
