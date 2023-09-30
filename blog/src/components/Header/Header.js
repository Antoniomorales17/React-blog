import "./Header.css";
import img from "../../img/me.png"

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Web Developer</span>
        {/* <span className="headerTitleLg">La vida de un desarrollador</span> */}
      </div>
      <img
        className="headerImg"
        src={img}
        alt=""
      />
    </div>
  );
}