import React from "react";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";

function Lot(props) {
  return (
    <div className={props.className}>
      <Link
        to="/react-super-app/randomLot"
        className="btn brown btn-sm rounded-btn text-2xl"
      >
        Create a random lot
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
          This helps you to draw a random lot
        </div>
      </Popup>
    </div>
  );
}

export default Lot;
