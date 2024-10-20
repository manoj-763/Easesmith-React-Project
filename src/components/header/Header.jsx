import "./Header.css";
const Heade = () => {
  return (
    <div className="container-fluid header-bg text-white">
    <div className="row align-items-center py-2">
      <div className="col-7 d-flex justify-content-end">
        <p className="price-heading mb-0">Free Shipping on orders above 999/-</p>
      </div>
      <div className="col-5 d-flex justify-content-end">
        <p className="price-heading mb-0">Call us on: +91-9876805120</p>
      </div>
    </div>
  </div>
  
  );
};

export default Heade;
