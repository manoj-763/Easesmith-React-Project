import "./Search.css";
import { GrSearch } from "react-icons/gr";
import Leaf from "../../assets/images/search-plant.png";

const SearchPlant = () => {
  return (
    <div className="search-container">
      <div className="search-box">
        <GrSearch className="icon" />

        <input
          type="text"
          placeholder="Search Plant"
          className="search-input"
        />

        <img className="plant-icon" style={{ width: "12%" }} src={Leaf} />
      </div>
    </div>
  );
};

export default SearchPlant;
