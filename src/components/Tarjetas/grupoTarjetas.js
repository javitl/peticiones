import { useEffect, useState } from "react";
import "./grupoTarjetas.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Loading from "../Loading/loading";

// Config variables
const GrupoTarjetas = (props) => {
  const [showTooltip, setShowTooltip] = useState(true);
  const [peticionAleatoria, setPeticionAleatoria] = useState("");

  const getRandomPeticion = () => {
    setPeticionAleatoria(
      props.peticiones[Math.floor(Math.random() * props.peticiones.length)]
    );
  };

  useEffect(() => {
    setTimeout(() => {
      setShowTooltip(false);
    }, 2000);
  }, []);

  return (
    <>
      <div className="grupo-tarjetas">
        {props.isLoading ? (
          <Loading />
        ) : (
          <>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 767: 3, 1023: 5, 1439: 7 }}
            >
              <Masonry>
                {props.peticiones.map((item, key) => (
                  <div key={key} className="tarjeta-peticion">
                    <img
                      className="tarjeta-peticion__imagen"
                      src={item.image}
                    />
                    <div className="tarjeta-peticion__nombre">{item.name}</div>
                    <div className="tarjeta-peticion__body">
                      <div className="tarjeta-peticion__peticion">
                        {item.pray}
                      </div>
                    </div>
                  </div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </>
        )}
      </div>
      <button
        className="boton-random"
        onClick={() => getRandomPeticion()}
        onMouseOver={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        ?
      </button>
      <div className={"boton-random__tooltip " + (showTooltip ? "show" : "")}>
        Petición aleatoria
      </div>
      {peticionAleatoria !== "" && (
        <div className="modal-peticion-aleatoria">
          <button className="modal__cerrar" onClick={()=>setPeticionAleatoria("")}>x</button>
          <div className="tarjeta-peticion">
            <img
              className="tarjeta-peticion__imagen"
              src={peticionAleatoria.image}
            />
            <div className="tarjeta-peticion__nombre">
              {peticionAleatoria.name}
            </div>
            <div className="tarjeta-peticion__body">
              <div className="tarjeta-peticion__peticion">
                {peticionAleatoria.pray}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GrupoTarjetas;
