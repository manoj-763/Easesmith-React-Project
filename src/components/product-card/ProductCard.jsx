import { useContext, useState } from "react"; 
import { CartContext } from "../context/CartContext";
import "./ProductCard.css";
import { Pagination } from "react-bootstrap";
import { Products } from "../../../data/ProductListData";

const ProductCard = () => {
  const { addToCart } = useContext(CartContext); 
  const [visibleCount, setVisibleCount] = useState(9);

  const handleViewMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 9, Products.length)); 
  };

  return (
    <div className="container-fluid">
      <div className="row w-100">
        {Products.slice(0, visibleCount).map((product) => (
          <div className="col-md-4" key={product.id}>
            <div className="py-4">
              <div className="product-card product-image-wrapper position-relative d-flex justify-content-center">
                <div className="py-3">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="product-image"
                  />
                </div>
              </div>
              <div className="card-body text-left pt-4">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <div className="rating">
                  <span className="text-warning">★★★★★</span>
                  <span className="rating-value">{product.rating}</span>
                </div>
                <div className="price-section">
                  <span className="original-price text-muted">
                    <s>₹ {product.originalPrice}</s>
                  </span>
                  <span className="discount-price fw-bold ms-2">
                    ₹ {product.discountPrice}
                  </span>
                </div>
                <div className="d-flex gap-1 py-2 col-12">
                  <button
                    className="button-one py-2 px-3"
                    onClick={() => addToCart(product)} 
                  >
                    - Add to cart +
                  </button>
                  <button className="button-two py-2 px-2">Buy on Rent</button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="text-center py-5">
          {visibleCount < Products.length && ( 
            <button className="px-5 py-3 button-three rounded-pill" onClick={handleViewMore}>
              View More
            </button>
          )}
        </div>
        <div>
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
