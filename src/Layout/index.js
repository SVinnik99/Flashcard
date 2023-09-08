import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import Decks from "../components/Decks";
import CreateDeck from "../components/CreateDeck";
import CreateDeckButton from "../components/CreateDeckButton";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";

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
        <Switch>
          <Route exact path="/">
            <CreateDeckButton />
            <Decks decks={decks} />
          </Route>

          <Route path="/decks/new">
            <CreateDeck/>
          </Route>
          <NotFound />
        </Switch>
      </div>
    </>
  );
}

export default Layout;
