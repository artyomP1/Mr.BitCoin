import React from "react";

export default function(props) {
  const { user } = props;

  return (
    <ul className="moves-list">
      {user.moves.map(move => {
        return (
          <li key={move}>
            <div>At: {move.at}</div>
            <div>Amount: {move.amount} coins</div>
          </li>
        );
      })}
    </ul>
  );
}
