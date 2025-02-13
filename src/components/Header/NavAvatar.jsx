import { Dropdown } from "react-bootstrap";
import UserImage from "./../../assets/user.jpg";
import { IoPersonOutline, IoSettingsOutline } from "react-icons/io5";
import { MdHelpOutline, MdOutlineLogout } from "react-icons/md";

export default function NavAvatar() {
  return (
    <li className="nav-item pe-2">
      <Dropdown>
        <Dropdown.Toggle
          variant="success"
          id="dropdown-basic"
          className="nav-link nav-profile d-flex align-items-center "
        >
          <img src={UserImage} alt="" className="rounded-cirlce user-image" />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <ul className="profile">
            <li className="dropdown-header">
              <div className="text-center">
                <h6 className="text-center">Omar</h6>
                <span className="text-center">MERN developer</span>
              </div>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a href="" className="dropdown-item d-flex align-items-center">
                <IoPersonOutline />
                <span className="ps-2">My Profile</span>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a href="" className="dropdown-item d-flex align-items-center">
                <IoSettingsOutline />
                <span className="ps-2">Account Setting</span>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>

            <li>
              <a href="" className="dropdown-item d-flex align-items-center">
                <MdHelpOutline />
                <span className="ps-2">Need Help?</span>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>

            <li>
              <a href="" className="dropdown-item d-flex align-items-center">
                <MdOutlineLogout />
                <span className="ps-2">Sign Out</span>
              </a>
            </li>
          </ul>
        </Dropdown.Menu>
      </Dropdown>
    </li>
  );
}
