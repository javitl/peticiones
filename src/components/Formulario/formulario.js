import { useEffect, useState } from "react";
import "./formulario.css";
import { db, storage } from "../firebase";
import icono from "./add-image.svg";
import ReCAPTCHA from "react-google-recaptcha";
import Loading from "../Loading/loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const imagenesArray = [
  "https://i.pinimg.com/564x/ac/e0/1b/ace01bf624688cb3309544f09d8a3f1c.jpg",
  "https://i.pinimg.com/564x/79/ac/09/79ac09357e9ae6b33621b698ef23bb8c.jpg",
  "https://i.pinimg.com/564x/87/52/c1/8752c1e653eb99acc4801e6b0ecf3423.jpg",
  "https://i.pinimg.com/564x/cb/28/ff/cb28ffbbdca24dbfa115d2334e7b1aa2.jpg",
  "https://i.pinimg.com/564x/d2/db/28/d2db28c872c1f8548c05078a1f9d5575.jpg",
];

const Formulario = (props) => {
  const [nombre, setNombre] = useState("");
  const [peticion, setPeticion] = useState("");
  const [imagen, setImagen] = useState(null);
  const imagenDefault = imagenesArray[Math.floor(Math.random() * imagenesArray.length)];
  const [imagenPlaceholder, setImagenPlaceholder] = useState(null);
  const [enviado, setEnviado] = useState(0);
  const [peticionCounter, setPeticionCounter] = useState(0);
  const [captchaPassed, setCaptchaPassed] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setEnviado(1);
    if (
      nombre !== "" &&
      peticion !== "" &&
      peticionCounter <= 255 &&
      captchaPassed
    ) {
      if (imagen) {
        handleImageUpload();
      } else {
        addPeticion(imagenDefault);
      }
    } else {
      toast.error("Por favor, llenar todos los campos 👋🏻", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log("No andes hackeando pls");
    }
  };

  const handleImageChange = (event) => {
    if (event.target.files[0]) {
      if (
        event.target.files[0].type === "image/png" ||
        event.target.files[0].type === "image/jpeg"
      ) {
        if (event.target.files[0].size < 5 * 1024 * 1024) {
          setImagen(event.target.files[0]);
          setImagenPlaceholder(URL.createObjectURL(event.target.files[0]));
        } else {
          toast.error("La Imágen es demasiado pesada 📷", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      } else {
        toast.error("Lo sentimos, esto no es imágen 😓", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  };

  const handleImageUpload = () => {
    const imageName = imagen.name + "-" + Date.now();
    const uploadTask = storage.ref(`images/${imageName}`).put(imagen);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(imageName)
          .getDownloadURL()
          .then((url) => {
            addPeticion(url);
          });
      }
    );
  };

  const handleCloseModal = (e) => {
    if (e.key === "Escape") {
      props.setMostrarForm(false);
    }
  };

  const addPeticion = async (url) => {
    await db
      .collection("peticiones")
      .add({
        name: nombre,
        pray: peticion,
        image: url,
        date: new Date(),
      })
      .then((docRef) => {
        setEnviado(2);
        toast.info("Petición enviada correctamente 🙏🏻", {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        props.getPeticiones();
        setTimeout(function () {
          props.setMostrarForm(false);
        }, 2000);
      })
      .catch((error) => {
        toast.error("No se pudo enviar la peticion 😞", {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setEnviado(0);
      });
  };

  function onChange(value) {
    if (value !== null) {
      setCaptchaPassed(true);
    } else {
      setCaptchaPassed(false);
    }
  }

  useEffect(() => {
    setPeticionCounter(peticion.length);
  }, [peticion.length]);

  useEffect(() => {
    document.addEventListener("keydown", handleCloseModal);
  }, []);

  return (
    <>
      {enviado === 0 && (
        <div className="formulario-container">
          <button
            className="formulario-container__close"
            onClick={() => props.setMostrarForm(false)}
          >
            X
          </button>
          <form onSubmit={handleSubmit}>
            <input
              id="imagen"
              className="input-imagen"
              type="file"
              onChange={handleImageChange}
            />
            <label htmlFor="imagen" className="input-imagen__button">
              <div className="input-imagen__button__overlay">
                <img src={icono} />
              </div>
              <img
                className="imagen-preview"
                src={imagenPlaceholder || "https://firebasestorage.googleapis.com/v0/b/peticiones-database.appspot.com/o/images%2Fwebsiteplanet-dummy-540X400.png?alt=media&token=093301bf-95fd-4a0e-a570-cc032b34a2cc"} 
              />
            </label>
            <input
              className="input-nombre"
              maxLength="27"
              type="text"
              name="nombre"
              placeholder="Nombre"
              onChange={(event) => setNombre(event.target.value)}
            />
            <div className="form-body">
              <textarea
                rows={8}
                type="text"
                name="nombre"
                placeholder="Petición"
                onChange={(event) => {
                  setPeticion(event.target.value);
                }}
              />
              {peticionCounter <= 255 ? (
                <span>{peticionCounter}/255</span>
              ) : (
                <span>
                  <span style={{ color: "red" }}>{peticionCounter}</span>/255
                </span>
              )}
              <div className="captcha-container">
                <ReCAPTCHA
                  sitekey="6Lcrx5wUAAAAAFivqPGaNfKEJiTi-YSdFfOJPes6"
                  onChange={onChange}
                />
              </div>
              <button
                className="form-button"
                disabled={
                  nombre === "" ||
                  peticion === "" ||
                  peticionCounter > 255 ||
                  !captchaPassed
                }
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      )}
      {enviado === 1 && (
        <>
          <Loading />
          <div className="formulario-container">
            <h2>Agregando tu petición a la cajita 📦</h2>
          </div>
        </>
      )}
      {enviado === 2 && (
        <div className="formulario-container">
          <h2>Agregando tu petición a la cajita 📦</h2>
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default Formulario;
