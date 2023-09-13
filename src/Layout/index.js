import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import Decks from "../components/Decks";
import DeckView from "../components/DeckView";
import CreateDeck from "../components/CreateDeck";
import CreateDeckButton from "../components/CreateDeckButton";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import { listDecks, createDeck, deleteDeck } from "../utils/api";

function Layout() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    listDecks().then((response) => {
      return setDecks(response);
    });
  }, []);

  console.log(decks.length);

  // const createDeck = (newDeck) =>
  //   setDecks((currentDeck) => [...currentDeck, newDeck]);

  // const deleteDeck = (indexToDelete) => {
  //   setDecks((currentDecks) =>
  //     currentDecks.filter((deck, index) => index !== indexToDelete)
  //   );
  // };

  return (
    <>
      <Header />

      <div className="container">
        <Switch>
          <Route exact path="/">
            <CreateDeckButton />
            <Decks deleteDeck={deleteDeck} decks={decks} />
          </Route>

          <Route path="/decks/new">
            <CreateDeck decks={decks} createDeck={createDeck} />
          </Route>

          <Route path="/decks/:deckId">
            <DeckView decks={decks} />
          </Route>

          <NotFound />
        </Switch>
      </div>
    </>
  );
}

export default Layout;
