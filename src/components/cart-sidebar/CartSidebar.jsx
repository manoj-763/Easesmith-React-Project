import  { useState } from 'react';
import { Offcanvas, Button } from 'react-bootstrap';

const CartSidebar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Cart Icon Button */}
      <Button variant="outline-success" onClick={handleShow}>
        <i className="bi bi-cart3"></i> {/* Bootstrap Icon for Cart */}
      </Button>

      {/* Offcanvas for Cart */}
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Cart Items */}
          <div className="cart-item">
            <img src="plant-image.jpg" alt="Plant" className="cart-item-img" />
            <div className="cart-item-info">
              <h5>Money Plant</h5>
              <p>Size: Small</p>
              <p>Price: Rs. 199 <span className="text-muted">Rs. 299 (20% OFF)</span></p>
              <p>Delivery by: Tue, Oct 05</p>
              <div className="cart-item-actions">
                <Button variant="danger" size="sm">Remove</Button>
                <Button variant="outline-secondary" size="sm">Save for Later</Button>
              </div>
            </div>
          </div>
          {/* Repeat the above block for each cart item */}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CartSidebar;
