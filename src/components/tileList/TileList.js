import React from "react";
import { Tile } from "../tile/Tile";
// Recieve tiles(contacts or appointments) and pass it as tile (contact or appointment) to Tile component
export const TileList = ({ tiles }) => {
  return (
    <div>
      {tiles.map((tile, index) => (
        <Tile key={index} tile={tile} />
      ))}
    </div>
  );
};