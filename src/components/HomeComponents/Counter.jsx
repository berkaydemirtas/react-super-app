import React from "react";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";

function Counter(props) {
  console.log(props);
  return (
    <div className={props.className}>
      <Link to="/counter" className="btn brown btn-sm rounded-btn text-2xl">
        Use the counter
      </Link>
      <Popup
        trigger={
          <button className="btn background-green btn-sm rounded-full">
            ?
          </button>
        }
        position="right center"
      >
        <div className="background-green p-5 rounded-lg">
          {" "}
          Simple counter to increment and decrement
        </div>
      </Popup>
    </div>
  );
}

export default Counter;
