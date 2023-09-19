import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import { listDecks } from "../utils/api";
import { useState } from "react";
import Decks from "../Decks/Decks";
import '../App.css';
import Study from "../Decks/Study";

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
        <Router>
          <Switch>
            <Route exact={true} path="/">
              <Decks decks={decks} />
            </Route>
            <Route exact={true} path="/decks/:id/study">
              <Study />
            </Route>
          </Switch>

          <NotFound />
        </Router>
      </div>
    </>
  );
}

export default Layout;
