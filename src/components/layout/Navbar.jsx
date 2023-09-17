import { FaBeer } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../App.css";

function Navbar({ title }) {
  return (
    <nav
      className="navbar shadow-lg bg-neutral
    text-neutral-content"
    >
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaBeer className="inline pr-2 text-4xl" />
          <Link
            to="/"
            className="text-lg font-bold 
            allign-middle"
          >
            {title}
          </Link>
        </div>
      </div>

      <div className="flex">
        <div className="flex justify-end"></div>
        <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
          Home
        </Link>
        <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
          About
        </Link>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "Berkay's Super App",
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
