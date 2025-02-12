import "./Header.css";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="header fixed-top d-flex align-iteams-center">
      {/* {logo} */}
      <Logo></Logo>
      {/* { SearchBar} */}
      <SearchBar />
    </header>
  );
}
