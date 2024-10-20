import "./Footer.css";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { BsThreads } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer py-5">
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div className="col-md-3">
              <h6 style={{ color: "black" }}>SUBSCRIBE TO OUR NEWSLETTER</h6>
              <ul className="list-unstyled py-2">
                <li>
                  Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem
                  aut necesbus enim
                </li>

                <li>
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Enter Your Email Address"
                  />
                </li>
                <li>
                  <button className="btn btn-success rounded-pill py-2 px-4">
                    SUBSCRIBE
                  </button>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <h6 style={{ color: "black" }}>ABOUT US</h6>
              <ul className="list-unstyled py-4">
                <li>Our Story</li>
                <li>Blogs</li>
                <li>Careers</li>
                <li>Contact Us</li>
                <li>Help & Support</li>
              </ul>
            </div>
            <div className="col-md-2">
              <h6 style={{ color: "black" }}>OUR SERVICES</h6>
              <ul className="list-unstyled py-4">
                <li>Book Maali</li>
                <li>Plant Day Care</li>
                <li>Rent Plants</li>
                <li>Plants & Pots</li>
                <li>Gardening Tools</li>
              </ul>
            </div>
            <div className="col-md-2">
              <h6 style={{ color: "black" }}>USEFUL LINKS</h6>
              <ul className="list-unstyled py-4">
                <li>My Account</li>
                <li>Order & Returns</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Return, Refund & Replacement Policy</li>
              </ul>
            </div>
            <div className="col-md-2">
              <h6 style={{ color: "black" }}>GET IN TOUCH</h6>
              <ul className="list-unstyled py-4">
                <li>
                  Address: F-262, First Floor, Sushant Lok Phase-III, Sector-57,
                  Gurgaon, Haryana, India 122003
                </li>
                <li>Call: +919958287272</li>
                <li>Email: care@chaperoneplants.com</li>
              </ul>
            </div>
            <div className="col-md-12 py-4">
              <h6 style={{ color: "black" }}>CHAPERONE</h6>
              <p>
                Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem
                aut necessitatibus enim ut internos accusantium a numquam autem
                ab rerum omnis. Non molestiae ratione et laborum doloribus aut
                molestiae voluptates ut porro excepturi sit molestiae obcaecati
                qui quis beatae est voluptatem eius. Et architecto nihil id
                labore omnis hic iste deleniti et porro aspernatur.
              </p>
            </div>
            <div className="col-md-12 pb-5">
              <h6 style={{ color: "black" }}>Follow us on</h6>
              <div className="d-flex justify-content-start align-items-center gap-2">
                <IoLogoInstagram size={30} style={{ color: "black" }} />
                <FaFacebook size={30} style={{ color: "black" }} />
                <BsThreads size={30} style={{ color: "black" }} />
                <FaYoutube size={30} style={{ color: "black" }} />
                <FaLinkedin size={30} style={{ color: "black" }} />
              </div>
            </div>
            <hr />
            <div>
              <p style={{fontSize:"16px"}}>© 2023, chaperone.com All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
