import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import SearchBox from "../SearchBox";
import "./styles.css";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <div className="header">
      <div className="section-1">
        <img src={logo} alt="air-bnb" />
        <SearchBox />
      </div>
      <div className="section-2">
        <button>Torne-se um anfitrião</button>
        <button>Salvos</button>
        <button>Viagens</button>
        <button>Mensagens</button>
        <button>Ajuda</button>
        <button>
          <AccountCircleIcon />
        </button>
      </div>
    </div>
  );
}
