import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate
import Logo from "../../assets/images/logo.png";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { Offcanvas, Button, Modal } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import "./Navbar.css";

const Navbar = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const [activeItem, setActiveItem] = useState("");
  const [showCart, setShowCart] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); // State for selected product
  const navigate = useNavigate();

  const handleClick = (item) => {
    setActiveItem(item);
  };

  const handleCartShow = () => setShowCart(true);
  const handleCartClose = () => setShowCart(false);

  const handlePlaceOrder = () => {
    if (cartItems.length > 0) {
      setSelectedProduct(cartItems[0]); // Get the first product
    }
    setShowModal(true);
    clearCart(); // Clear cart after placing the order
  };

  const handleContinueShopping = () => {
    setShowModal(false);
    setShowCart(false);
    navigate("/"); // Navigate to home after placing the order
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img style={{ width: "100%" }} src={Logo} alt="Logo" />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {[
              { name: "Home", path: "/" },
              { name: "Plants & Pots", path: "/plants" },
              { name: "Tools", path: "/tools" },
              { name: "Our Services", path: "/services" },
              { name: "Blog", path: "/blog" },
              { name: "Our Story", path: "/story" },
              { name: "FAQs", path: "/faqs" },
            ].map(({ name, path }) => (
              <li
                key={name}
                className="nav-item"
                onClick={() => handleClick(name)}
              >
                <Link
                  to={path}
                  className={`nav-link ${activeItem === name ? "text-orange" : ""}`}
                >
                  {name}
                  {(name === "Tools" || name === "Our Services") && <IoIosArrowDown />}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="navbar-nav d-flex gap-3 align-items-center">
            <li className="nav-item d-flex flex-column align-items-center">
              <AiOutlineUser />
              <span
                className={activeItem === "My Profile" ? "text-orange" : ""}
                onClick={() => handleClick("My Profile")}
                style={{ cursor: "pointer" }}
              >
                My Profile
              </span>
            </li>

            <li
              className="nav-item d-flex flex-column align-items-center"
              onClick={handleCartShow}
            >
              <HiOutlineShoppingCart />
              <span
                className={activeItem === "Cart" ? "text-orange" : ""}
                style={{ cursor: "pointer" }}
              >
                Cart ({cartItems.length})
              </span>
            </li>
          </ul>
        </div>
      </nav>

      {/* Offcanvas for Cart */}
      <Offcanvas show={showCart} onHide={handleCartClose} placement="end">
        <Offcanvas.Header closeButton />
        <Offcanvas.Title className="text-center fs-3">Your Cart</Offcanvas.Title>
        <Offcanvas.Body>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div className="container mt-5" key={item.id}>
                <div className="row cart-item mb-3">
                  <div className="image-container col-md-2">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="img-fluid cart-image"
                    />
                    <div className="qty px-1">Qty: {item.quantity}</div>
                  </div>
                  <div className="col-md-10">
                    <h5>
                      {item.name}{" "}
                      <span className="text-muted">Size: Small</span>
                    </h5>
                    <div>
                      <span style={{ color: "#165315", fontWeight: "bold" }}>
                        Rs. {item.discountPrice}
                      </span>
                      <span className="text-muted text-decoration-line-through">
                        Rs. {item.originalPrice}
                      </span>
                      <span style={{ color: "yellow", fontSize: "15px" }}>
                        {" "}
                        (20% OFF)
                      </span>
                    </div>
                    <div className="cart-item-actions">
                      <button className="qty px-1" size="sm">
                        Remove
                      </button>
                      <button>Save for Later</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}

          <Button
            variant="success"
            className="mt-3 w-100"
            onClick={handlePlaceOrder}
          >
            Place Order
          </Button>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Modal for order confirmation */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton style={{ color: "#247822", textAlign: "center" }}>
          <Modal.Title style={{ margin: 0 }}>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column align-items-center">
          <h3 className="py-3"
            style={{
              maxWidth: "200px",
              color: "#165315",
              fontSize: "20px",
              fontWeight: "700",
              textAlign: "center",
            
            }}
          >
            Congratulations! Order Placed for {selectedProduct ? selectedProduct.name : "Your Product"}
          </h3>
          <img
            src="src/assets/images/plant 1.png" 
            alt="Confirmation"
            className="img-fluid w-25 py-3"
          />
          <p className="py-3"
            style={{
              maxWidth: "400px",
              color: "#165315",
              fontSize: "15px",
              textAlign: "center",
            }}
          >
            Thank you for choosing our services. We will soon get in touch with you!
          </p>
          <button
            className="px-5 py-2 text-center continue-shopping"
            onClick={handleContinueShopping}
          >
            Continue Shopping
          </button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Navbar;
