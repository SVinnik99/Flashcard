import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Deck from "../Components/Deck/Deck";
import DeckView from "../Components/Deck/DeckView";
import Study from "../Components/Study/Study";
import AddCards from "../Components/Add/AddCards";
import EditCard from "../Components/Edit/EditCard";
import { useState, useEffect } from "react";
import { Route, Switch, Link } from "react-router-dom";
import { listDecks, createDeck, deleteDeck } from "../utils/api";
import Home from "../Components/Home/Home";

import CreateDeck from "../Components/CreateDeck/CreateDeck";
import EditDeck from "../Components/Edit/EditDeck";

function Layout() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    // listDecks().then(setDecks)

    async function fetchDecks() {

      const response = await listDecks();
      setDecks(response);

    }
    fetchDecks();
  }, []);

  return (
    <>
      <Header />

      <div className="container">
        <Switch>

          <Route exact path= "/">
            <Home setDecks={setDecks} decks={decks} deleteDeck={deleteDeck} />
          </Route>
          <Route  exact path="/decks/new">
            <CreateDeck />
          </Route>
          <Route exact path="/decks/:deckId">
            <DeckView setDecks={setDecks} decks={decks}/>
          </Route>
          <Route exact path="/decks/:deckId/study">
            <Study decks={decks} />
          </Route>
          <Route  exact path="/decks/:deckId/edit">
            <EditDeck />
          </Route>
          <Route exact path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>
          <Route exact path="/decks/:deckId/cards/new">
            <AddCards />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
