import "./Settings.css";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Subir cuenta</span>
          <span className="settingsTitleDelete">Borrar cuenta</span>
        </div>
        <form className="settingsForm">
          <label>Foto de Perfil</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Antonio" name="name" />
          <label>Email</label>
          <input type="email" placeholder="antoniomora.gimenez@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settingsSubmitButton" type="submit">
            Subir
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}