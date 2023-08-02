import "bootstrap/dist/css/bootstrap.min.css";
import data from "./players";
import player from "./components/Player";
import PlayerJS from "./components/Player";
import PlayerList from "./components/PlayerList";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <>
    <NavigationBar/>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: 50,
        }}
      >
        <PlayerList />
      </div>
    </>
  );
}

export default App;
