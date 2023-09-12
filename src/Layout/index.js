import React, { useEffect } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { listDecks } from "../utils/api";
import { useState } from "react";

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
        <p>{decks[0].name}</p>
        <NotFound />
      </div>
    </>
  );
}

export default Layout;
