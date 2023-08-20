

import React from "react";
import Player from "./PPlayer";
import players from "./player"; 

const PlayersList = () => {
  return (
    <div>
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
