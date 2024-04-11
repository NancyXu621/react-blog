import React from "react";
import { Link } from "react-router-dom";

const Menu: React.FC = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/setup">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
