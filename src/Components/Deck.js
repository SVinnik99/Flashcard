import DeckList from "./DeckList";
import { Route, useRouteMatch, Switch, Routes } from "react-router-dom";

function Deck({ decks, deleteDeck }) {
  const { path } = useRouteMatch();
  

  console.log(path);
  return (
    <div>
      <Switch>
        <Route path={path}>
          <DeckList decks={decks} deleteDeck={deleteDeck} />
        </Route>

      </Switch>
    </div>
  );
}

export default Deck;
