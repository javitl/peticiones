import { Adsense } from "@ctrl/react-adsense";
import { useEffect } from "react";
import "./About.css";

const About = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  });

  return (
    <div className="post-container">
      <ins
        className="adsbygoogle"
        style={{display:'block'}}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-2146397552881402"
        data-ad-slot="3107939481"
      ></ins>
      <h3>
        "Confesaos vuestras ofensas unos a otros, y orad unos por otros, para
        que seáis sanados. La oración eficaz del justo puede mucho."
      </h3>
      <h4>-Santiago 5:16</h4>
      <p>
        La idea principal se basa en la conocida "Caja de Peticiones", después
        de una semana de oración, donde se depositan las oraciones en una caja,
        al final se queman y se oran por ellas. Así que por mi cabeza entró la
        idea de hacer una caja virtual, en la que CUALQUIERA pudiera depositar
        una petición, pero al mismo tiempo, poder orar por las peticiones de los
        demás; Formando así un GRAN Bando de oración.
      </p>
      <p>
        Mi nombre es <b>Javier Miz Arévalo</b> y este proyecto nació como
        sucesor de otro igual desarrollado en tecnologías de las que no tenia el
        control que deseaba y terminó fracasando y en el olvído.
      </p>
      <p>
        Un año después de la "Primera versión" de este proyecto obtuve nuevos
        conocimientos que me han permitido llevar esto a otra fase, trabajando
        de forma más personalizada y teniendo más control de todo el ambiente de
        desarrollo.
      </p>
      <p>
        A pesar de todo esto, mantener este proyecto no es 100% gratuito por eso
        se muestra un pequeño cuadro de publicidad, y si gustas aportar la más
        mínima cantidad, será de gran ayuda.
      </p>
      <a
        href="https://www.paypal.com/donate?hosted_button_id=DZ4DE7NKV83EG"
        target="_blank"
        rel="noreferrer"
        className="boton-donar"
      >
        Apoyar al desarrollador
      </a>
      <h3>Contáctame</h3>
      <div className="social-media">
        <a
          href="https://www.instagram.com/javiermiz_/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        <a
          href="https://www.facebook.com/javiermiza"
          target="_blank"
          rel="noreferrer"
        >
          Facebook
        </a>
        <a
          href="https://twitter.com/javiermiz_"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
      </div>
    </div>
  );
};

export default About;
