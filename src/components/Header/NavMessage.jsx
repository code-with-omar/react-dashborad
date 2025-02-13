import { Dropdown } from "react-bootstrap";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import Message1 from "./../../assets/messages-1.jpg";
import Message2 from "./../../assets/messages-2.jpg";
import Message3 from "./../../assets/messages-3.jpg";
export default function NavMessage() {
  return (
    <li className="nav-item">
      <Dropdown>
        <Dropdown.Toggle
          variant="success"
          id="dropdown-basic"
          className="nav-link nav-icon dropdown-button"
        >
          <IoChatbubbleEllipsesOutline />
          <span className="badge bg-success badge-number">3</span>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <ul className="message">
            <li className="dropdown-header">
              You have 3 new messages
              <a href="#">
                <span className="badge rounded-pill bg-primary p-2 ms-2">
                  View all
                </span>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>

            <li className="message-item">
              <a href="#">
                <img src={Message1} alt="" className="rounded-circle" />
                <div>
                  <h4>Maria Hudson</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit....
                  </p>
                  <p>4 hrs. ago</p>
                </div>
              </a>
            </li>

            <li>
              <hr className="dropdown-divider" />
            </li>

            <li className="message-item">
              <a href="#">
                <img src={Message2} alt="" className="rounded-circle" />
                <div>
                  <h4>Shrabony Alom</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit....
                  </p>
                  <p>3 hrs. ago</p>
                </div>
              </a>
            </li>

            <li>
              <hr className="dropdown-divider" />
            </li>

            <li className="message-item">
              <a href="#">
                <img src={Message3} alt="" className="rounded-circle" />
                <div>
                  <h4>Omar Faruk</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit....
                  </p>
                  <p>3 hrs. ago</p>
                </div>
              </a>
            </li>
          </ul>
        </Dropdown.Menu>
      </Dropdown>
    </li>
  );
}
