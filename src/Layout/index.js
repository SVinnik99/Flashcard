import React, { useEffect, useState } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import CreateDeck from "../Home/CreateDeck";
import NewDeck from "../Home/NewDeck";
import { Route, Switch } from "react-router-dom";
import DeckList from "../Home/DeckList";

function Layout() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    async function loadDecks() {
      const response = await fetch("http://localhost:8080/decks");

      const decksFromAPI = await response.json();

      setDecks(decksFromAPI);
    }
    loadDecks();
  }, []);

  return (
    <Switch>
      <>
        <Header />
        <div className="container">
          <Route exact path="/">
            <CreateDeck />
            <DeckList decks={decks} />
          </Route>

          <Route path="/decks/new">
            <NewDeck />
          </Route>

         
        </div>
      </>
      <NotFound path="*" />
    </Switch>
  );
}

export default Layout;
