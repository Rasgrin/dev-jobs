import "./navbar.scss";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <header>
      <div className="navbar">
        <Link reloadDocument to="/">
          <h2>devJobs</h2>
        </Link>

        <div className="theme-switch">
          <LightModeIcon fontSize="small" />

          <div className="switch" onClick={toggle}>
            <div className={`circle ${theme === "dark" ? "on" : "off"}`}></div>
          </div>

          <DarkModeIcon fontSize="small" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
