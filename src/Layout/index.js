import React, { useEffect, useState } from "react";
import {Route} from "react-router-dom"
import Header from "./Header";
import NotFound from "./NotFound";
import Decks from "../components/Decks";

function Layout() {
  const [decks, setDecks] = useState([]);


  useEffect(() => {
    async function loadDecks() {
      const response = await fetch("http://localhost:8080/decks?_embed=cards");

      const decksFromAPI = await response.json();

      setDecks(decksFromAPI);
    }

    loadDecks();
  }, []);



  return (
    <>
      <Header />
      <div className="container">

       
          <Decks decks={decks} />
        

        <NotFound />
      </div>
    </>
  );
}

export default Layout;
