import "./SearchBar.css";
import { CiSearch } from "react-icons/ci";
export default function SearchBar() {
  return (
    <div className="search-bar d-flex align-items-center">
      <form className="search-form d-flex align-items-center">
        <input
          type="text"
          name="query"
          placeholder="Search"
          title="Enter Search Keyword"
        />
        <button type="submit" title="Search">
          <CiSearch />
        </button>
      </form>
    </div>
  );
}
