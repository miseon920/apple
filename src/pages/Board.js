import React from "react";

function Board({ Stit }) {
  const num = 2;
  return (
    <section className="board">
      <div className="Stit">
        <h2>{Stit[num].tit}</h2>
        <p>{Stit[num].des}</p>
      </div>
      <div className="content inner">
        <ul></ul>
      </div>
    </section>
  );
}

export default Board;
