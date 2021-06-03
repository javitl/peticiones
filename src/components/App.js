import { useEffect, useState } from "react";
import "./App.css";
import About from "./About/About";
import Formulario from "./Formulario/formulario";
import Header from "./Header/header";
import GrupoTarjetas from "./Tarjetas/grupoTarjetas";
import { db } from "./firebase";

const App = () => {
  const [page, setPage] = useState(0);
  const [mostrarForm, setMostrarForm] = useState(false);
  const [peticiones, setPeticiones] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getPeticiones = async () => {
    setIsLoading(true);

    const response = db.collection("peticiones");
    const data = await response.orderBy("date", "desc").get();
    setPeticiones([]);
    data.forEach((peticion) => {
      setPeticiones((peticiones) => [...peticiones, peticion.data()]);
    });

    setIsLoading(false);
  };

  useEffect(() => {
    getPeticiones();
  }, []);

  return (
    <div className={mostrarForm ? "App modal-active" : "App"}>
      <Header setPage={setPage} page={page} setMostrarForm={setMostrarForm} />
      {page === 0 && <GrupoTarjetas peticiones={peticiones} isLoading={isLoading}/>}
      {page === 1 && <About />}
      {mostrarForm && <Formulario setMostrarForm={setMostrarForm} getPeticiones={getPeticiones}/>}
    </div>
  );
};

export default App;
