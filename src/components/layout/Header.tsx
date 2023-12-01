import React from "react";
import { Link } from "react-router-dom";

import { LOGO } from "../../utils/constants";

const Header: React.FC = () => {
  return (
    <nav className="absolute px-8 py-5">
      <Link to={"/"}>
        <img className="w-44" src={LOGO} alt="" />
      </Link>
    </nav>
  );
};

export default Header;
