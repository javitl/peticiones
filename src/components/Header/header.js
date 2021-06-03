import { useEffect, useState } from "react";
import "./header.css";
import HeaderLink from "./headerLink";

const Header = (props) => {
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowTooltip(false);
    }, 2000);
  }, []);

  return (
    <header>
      <HeaderLink
        onClick={() => props.setPage(0)}
        texto="Peticiones"
        className={props.page === 0 ? "active" : ""}
      />
      <HeaderLink
        onClick={() => props.setPage(1)}
        texto="Sobre este proyecto"
        className={props.page === 1 ? "active" : ""}
      />
      <button
        className="boton-agregar"
        onClick={() => props.setMostrarForm(true)}
        onMouseOver={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        +
      </button>
      <div className={"boton-agregar__tooltip " + (showTooltip ? "show" : "")}>
        Agregar petición
      </div>
    </header>
  );
};

export default Header;
