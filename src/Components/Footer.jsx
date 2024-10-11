import React from "react";
import logo from '../assets/img/logo.png';
const Footer = () => {
  return (
    <>
      <div class=" text-center" >
        <div className="row" style={{ background: "#0B527A" }}>
          <div class="col-7 text-white d-flex align-items-center justify-content-center">
            <div className="logo d-flex align-items-center">
              <img src={logo} alt="Ankurshala logo" />
              <div className="ms-2 me-5">
                <h3>Ankurshala</h3>
                <h6>On Demand Learning</h6>
              </div>
              <div className="ms-5">
                <h6>Try Ankurshala</h6>
                <button
                  className="btn px-4 text-white"
                  style={{
                    background: "#1291A3",
                    borderColor: "white",
                    fontSize: "15px",
                  }}
                >
                  USE APP
                </button>
              </div>
            </div>
          </div>
          <div class="col-4 text-center  align-items-center justify-content-end text-white">
            <div className="container mt-2">
              <h5 className="text-center">Subscribe to Our Newsletter</h5>
              <div className="row justify-content-center">
                <div className="col-md-4">
                  <div className="input-group mb-3">
                    <span
                      className="input-group-text rounded-start"
                      id="basic-addon1"
                    >
                      <i class="ri-mail-line"></i>{" "}
                      {/* Font Awesome Email Icon */}
                    </span>
                    <input
                      type="email"
                      className="form-control rounded-end" // Rounded input
                      placeholder="Email"
                      aria-label="Email"
                      style={{ height: "40px", fontSize: "12px" }} // Smaller size
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container text-white col-9 ">
            <hr className="bg-dark" style={{ height: "2px" }} />
          </div>
          <div className="container text-secondary col-9 d-flex justify-content-between">
            <div className="col-4">
              <p>© 2023 Ankurshala Group. All rights reserved.</p>
            </div>
            <div className="col-5">
              <div className="d-flex justify-content-evenly ">
                <p>Privacy & Cookies</p>
                <p>Website Terms Of Use</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
