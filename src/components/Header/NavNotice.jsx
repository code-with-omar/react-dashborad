import { FaRegBell, FaCircleInfo } from "react-icons/fa6";
import { FaExclamationCircle } from "react-icons/fa";
import { Dropdown } from "react-bootstrap";
export default function NavNotice() {
  return (
    <li className="nav-item">
      <Dropdown>
        <Dropdown.Toggle
          variant="success"
          id="dropdown-basic"
          className="nav-link nav-icon dropdown-button"
        >
          <FaRegBell />
          <span className="badge bg-primary badge-number">4</span>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <ul className="notifications">
            <li className="dropdown-header">
              You have 4 new notifications
              <a href="#">
                <span className="badge rounded-pill bg-primary p-2 ms-2">
                  View all
                </span>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>

            <li className="notifications-item">
              <FaExclamationCircle className="text-warning" />
              <div className="ps-2">
                <h4>Lorem Ipsum</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>30 min. ago</p>
              </div>
            </li>

            <li>
              <hr className="dropdown-divider" />
            </li>

            <li className="notifications-item">
              <FaCircleInfo className="text-info" />
              <div className="ps-2">
                <h4>Lorem Ipsum</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>30 min. ago</p>
              </div>
            </li>

            <li>
              <hr className="dropdown-divider" />
            </li>

            <li className="notifications-item">
              <FaCircleInfo className="text-info" />
              <div className="ps-2">
                <h4>Lorem Ipsum</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>55 min. ago</p>
              </div>
            </li>

            <li>
              <hr className="dropdown-divider" />
            </li>

            <li className="notifications-item">
              <FaCircleInfo className="text-info" />
              <div className="ps-2">
                <h4>Lorem Ipsum</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>1 hour. ago</p>
              </div>
            </li>

            <li>
              <hr className="dropdown-divider" />
            </li>

            <li className="notifications-item">
              <FaCircleInfo className="text-info" />
              <div className="ps-2">
                <h4>Lorem Ipsum</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>15 min. ago</p>
              </div>
            </li>
          </ul>
        </Dropdown.Menu>
      </Dropdown>
    </li>
  );
}
