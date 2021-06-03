import "./headerLink.css";

const HeaderLink = (props) => {
  return (
    <a href="#" className={'header-link '+props.className} onClick={props.onClick}>
      {props.texto}
    </a>
  );
};

export default HeaderLink;
