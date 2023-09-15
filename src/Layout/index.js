import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Deck from "../Components/Deck";
import DeckView from "../Components/DeckView";
import Study from "../Components/Study";
import { useState, useEffect } from "react";
import { Route, Switch, Link } from "react-router-dom";
import { listDecks,createDeck,deleteDeck } from "../utils/api";
import Button from "react-bootstrap/Button";
import CreateDeck from "../Components/CreateDeck";

function Layout() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {

   if(decks){
    try{
      listDecks().then((response) => {
        return setDecks(response);
      });

    }catch(error){
      console.log(error)
   }
   } 
   
  }, []);

  console.log(decks);

  return (
    <>
      <Header />

      <div className="container">
        <Switch>
          <Route exact path="/">
            <Link to="/decks/new">
              <Button>Create Deck</Button>
            </Link>

            <Deck decks={decks} deleteDeck={deleteDeck}/>
          </Route>

          <Route path="/decks/new">
            <CreateDeck createDeck={createDeck} />
          </Route>

          <Route exact path="/decks/:deckId">
          <DeckView decks={decks} deleteDeck={deleteDeck}/>
          </Route>

          <Route path="/decks/:deckId/study">
            <Study decks={decks}/>
          </Route>
          <NotFound />
        </Switch>
      </div>
    </>
  );
}

export default Layout;
