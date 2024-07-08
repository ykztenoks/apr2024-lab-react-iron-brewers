import homeIcon from "../assets/home-icon.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Link to="/">
      <nav
        style={{
          background: "#4fcac2",
          textAlign: "left",
          padding: "10px 40px",
        }}
      >
        <img
          src={homeIcon}
          alt="home icon"
          style={{ height: "30px", width: "auto" }}
        />
      </nav>
    </Link>
  );
}

export default Navbar;
