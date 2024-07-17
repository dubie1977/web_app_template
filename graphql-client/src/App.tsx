import "./App.css";
import FilmList from "./FilmList";
import StarshipList from "./StarshipList";

function App() {
  return (
    <div className="App">
      <h1>Films</h1>
      <FilmList />
      <h1>Starships</h1>
      <StarshipList />
    </div>
  );
}

export default App;
