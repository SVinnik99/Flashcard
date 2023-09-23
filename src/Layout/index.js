import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Deck from "../Components/Deck/Deck";
import DeckView from "../Components/Deck/DeckView";
import Study from "../Components/Study/Study";
import AddCards from "../Components/Add/AddCards"
import { useState, useEffect } from "react";
import { Route, Switch, Link } from "react-router-dom";
import { listDecks, createDeck, deleteDeck } from "../utils/api";
import Button from "react-bootstrap/Button";
import CreateDeck from "../Components/CreateDeck/CreateDeck";

function Layout() {


  const [decks, setDecks] = useState([]);


  useEffect(() => {



    // listDecks().then(setDecks) 

    async function fetchDecks() {
      try {
        const response = await listDecks();
        setDecks(response)
      } catch { }
    }
    fetchDecks();


  }, []);




  return (
    <>
      <Header />

      <div className="container">
        <Switch>
          <Route exact path="/">
            <Link to="/decks/new">
              <Button>Create Deck</Button>
            </Link>
            <Deck setDecks={setDecks} decks={decks} deleteDeck={deleteDeck} />
          </Route>

          <Route exact path="/decks/new">
            <CreateDeck createDeck={createDeck} />
          </Route>

          <Route exact path="/decks/:deckId">
            <DeckView />
          </Route>

          <Route exact path="/decks/:deckId/study">
            <Study decks={decks} />
          </Route>

          <Route path="/decks/:deckId/cards/new">
            <AddCards/>
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
