import React from "react";

export default function GetImg({ elem, nextRout }) {
  return (
    <div onClick={nextRout(elem)}>
      <img
        style={{ width: "100px", height:"100px" }}
        src={elem.type === "directory" ? "/folder.png" : elem.name}
      />
      <p>{elem.type === "directory" ? elem.name : elem.description}</p>
    </div>
  );
}
