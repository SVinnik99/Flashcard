import React, { useEffect, useState } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import CreateDeck from "../Components/CreateDeck";
import NewDeck from "../Components/NewDeck";
import { Route, Switch } from "react-router-dom";
import DeckList from "../Components/DeckList";
import Study from "../Components/Study";

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

          <Route path="/decks/:deckId/study">
            <Study decks={decks}/>
          </Route>

         
        </div>
      </>
      <NotFound path="*" />
    </Switch>
  );
}

export default Layout;
