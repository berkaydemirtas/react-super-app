import React from "react";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";

function SecretSanta(props) {
  return (
    <div className={props.className}>
      <Link
        to="/react-super-app/secretSanta"
        className="btn brown btn-sm rounded-btn text-2xl"
      >
        Draw Secret Santa
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
          Draw Secret Santa and send results via email
        </div>
      </Popup>
    </div>
  );
}

export default SecretSanta;
