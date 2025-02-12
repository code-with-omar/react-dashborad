import "./Logo.css";
import { IoMdMenu } from "react-icons/io";
export default function Logo() {
  const handleToggleSideBar = () => {
    document.body.classList.toggle("toggle-sidebar");
  };
  return (
    <div className="d-flex align-items-center justify-content-between">
      <a
        href="/"
        className="logo d-flex align-items-center"
        aria-label="Admin Dashboard Home"
      >
        <span className="d-none d-lg-block">AdminDashboard</span>
      </a>
      <IoMdMenu className="toggle-sidebar-btn" onClick={handleToggleSideBar} />
    </div>
  );
}
