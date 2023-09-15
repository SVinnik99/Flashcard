import React, { useEffect } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { listDecks } from "../utils/api";
import { useState } from "react";
import Decks from "../Decks/Decks";
import '../App.css';
import Study from "../Decks/Study";

function Layout() {

  let [decks, setDecks] = useState([]);

  useEffect(() => {
    async function fetchDecks() {
      try {
        const response = await listDecks();
        setDecks(response);
      } catch (error) {
        console.error("Error fetching decks: ", error)
      }
    }

    fetchDecks();
  }, [])

  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Decks decks={decks} />
        <Study deck={decks[0]} />
        <NotFound />
      </div>
    </>
  );
}

export default Layout;
