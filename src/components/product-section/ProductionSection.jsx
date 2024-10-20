import "./Product.css";
import { filters } from "../../../data/Filters";
import ProductCard from "../product-card/ProductCard";
import Dropdown from "../dropdown/Dropdown";


const ProductionSection = () => {
  return (
    <div className="container-fluid my-4">
      <div className="row">
        {/* Filter Section */}
        <div className="col-12 col-lg-3 filter-list-name">
          <div className="filter-header d-flex justify-content-between px-3 py-3">
            <h5 className="filter-title">Filter</h5>
            <h5 className="clear-all">CLEAR ALL</h5>
          </div>
          <ul className="filter-list px-3">
            {filters.map((filter, index) => (
              <li
                key={index}
                className={`d-flex justify-content-between py-3 ${filter.className}`}
              >
                <span>{filter.label}</span>
                <span className="toggle-icon">+</span>
              </li>
            ))}
          </ul>
        </div>

        {/* content column */}
        <div className="col-12 col-lg-9">
          <div className="d-flex align-items-center">
            <p>300 products</p>
            <Dropdown/>
          </div>
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default ProductionSection;
