import  { useState } from "react";
import './Dropdown.css';
import { RiArrowDropDownLine } from "react-icons/ri";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-container">
      {/* Dropdown Header */}
      <div
        className="d-flex justify-content-between align-items-center text-white"
        onClick={toggleDropdown}
        style={{ cursor: 'pointer', backgroundColor:"#165315"}}
      >
        <span className="fw-bold  px-3" style={{}}>SORT BY</span>
        <span className={`arrow ${isOpen ? 'rotate' : ''}`} ><RiArrowDropDownLine size={35} /></span>
      </div>

      {/* Dropdown Menu */}
      <ul
        className={`dropdown-menu-custom ${isOpen ? 'show' : ''} list-group`}
      >
        <li className="list-group-item">
          <input type="checkbox" className="" /> Size
        </li>
        <li className="list-group-item">
          <input type="checkbox" className="" /> Popularity
        </li>
        <li className="list-group-item">
          <input type="checkbox" className="" /> Price, Low–High
        </li>
        <li className="list-group-item">
          <input type="checkbox" className="me-2" /> Price, High–Low
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
