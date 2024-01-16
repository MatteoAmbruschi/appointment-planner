import React from "react";

export const Tile = ({name, description}) => {
  const objArr = Object.values(description)

  return (
    <div className="tile-container">
      <p className="tile-title">{name}, you are in!</p>

      {objArr.map((value, index) => {
       return <p className="tile" key={index}>{value}</p>
      })}

    </div>
  );
};
