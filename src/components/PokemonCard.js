import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ mon }) {
  const [twerk, setTwerk] = useState(true)

  const { id, name, hp, sprites } = mon

  const handleTwerk = () => {
    setTwerk(!twerk)
  }

  return (
    <Card >
      <div onClick={handleTwerk}>
      <div className="numID">#{id}</div>
        <div className="image">
          {twerk ? (<img src={sprites.front} alt="oh no!" />)
          : (<img src={sprites.back} alt="oh no!" />)}
        </div>
        <div className="content">
          <div className="header"><b>{name[0].toUpperCase()+name.slice(1)}</b></div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} HP
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
