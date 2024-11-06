import * as React from "react";
import { useState } from "react";

// 1. import `ChakraProvider` component
import { ChakraProvider, Switch } from "@chakra-ui/react";

import "./App.css";
import FilmList from "./FilmList";
import StarshipList from "./StarshipList";

function App() {
  const [showStarships, setShowStarships] = useState(false);
  const [showFilms, setShowFilms] = useState(false);

  return (
    <ChakraProvider>
      <div className="App">
        <Switch
          id="films"
          isChecked={showFilms}
          onChange={(event) => {
            console.log(event.target.checked);
            setShowFilms(!showFilms);
          }}
        >
          Show Films
        </Switch>
        {showFilms && <FilmList />}
        <Switch
          id="ship"
          isChecked={showStarships}
          onChange={(event) => {
            console.log(event.target.checked);
            setShowStarships(!showStarships);
          }}
        >
          Show Starships
        </Switch>
        {showStarships && <StarshipList />}
      </div>
    </ChakraProvider>
  );
}

export default App;
