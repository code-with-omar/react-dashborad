import { Dropdown } from "react-bootstrap";
import "./Nav.css";
import NavAvatar from "./NavAvatar";
import NavMessage from "./NavMessage";
import NavNotice from "./NavNotice";
export default function Nav() {
  return (
    <div className="header-nav ms-auto">
      <ul className="d-flex align-items-center">
        <NavNotice />
        <NavMessage />
        <NavAvatar />
      </ul>
    </div>
  );
}
