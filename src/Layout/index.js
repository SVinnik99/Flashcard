import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Deck from "../Components/Deck";
import { useState, useEffect } from "react";
import { Route, Switch, Link } from "react-router-dom";
import { listDecks } from "../utils/api";
import Button from "react-bootstrap/Button";
import CreateDeck from "../Components/CreateDeck";

function Layout() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    listDecks().then((response) => {
      return setDecks(response);
    });
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

            <Deck decks={decks} />
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
