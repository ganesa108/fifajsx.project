import Player from "../data/Player";
import jsonData from "../players";

function PlayerList() {
  return (
    <>
      {jsonData.map((player) => (
        <Player
          image={player.image}
          playerName={player.playerName}
          team={player.team}
          nationality={player.nationality}
          jerseyNumber={player.jerseyNumber}
          age={player.age}
        />
      ))}
    </>
  );
}

export default PlayerList;
