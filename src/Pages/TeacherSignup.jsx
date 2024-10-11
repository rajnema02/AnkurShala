import React from "react";
import logo from "../assets/Images/bg_remove-removebg-preview 2.png";
import img1 from "../assets/Images/undraw_Graduation_re_gthn-removebg-preview 1.png";
import img2 from "../assets/Images/undraw_Certificate_re_yadi-removebg-preview 1.png";
import img3 from "../assets/Images/undraw_Teacher_re_sico 1.png";
import img4 from "../assets/Images/undraw_Teacher_re_sico 1.png";
import "../assets/pages-css/TeacherSignup.css";
const TeacherSignup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div
      className="row"
      style={{ width: "100%", height: "100vh", display: "flex" }}
    >
      <div className="sec-1 col-8" style={{ backgroundColor: "#0B527A" }}>
        <div
          className="part-1 text-white"
          style={{ marginLeft: "12vw", position: "relative" }}
        >
          <div className="logo d-flex mt-3">
            <img src={logo} alt="Ankurshala logo" />
            &nbsp;&nbsp;
            <span>
              <h2>Ankurshala</h2>
              <h4 style={{ lineHeight: "0.1vh" }}>On Demand Learning</h4>
            </span>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h1>Tell Us More</h1>
          <h1>About You</h1>
          <img
            id="img1"
            style={{
              position: "absolute",
              top: "105%",
              left: "-20%",
              width: "38vw",
            }}
            src={img1}
            alt="Graduation illustration"
          />
        </div>
        <div className="part-2">
          <img
            id="img2"
            style={{ position: "absolute", top: "48%", left: "69%" }}
            src={img2}
            alt="Certificate illustration"
          />
        </div>
      </div>
      <div className="sec-2 col-4">
        <div className="part-1">
          <div className="image text-center">
            <img id="img3" src={img4} alt="Teacher" />
            <h5>Teacher</h5>
          </div>
          <h6>Sign Up</h6>
          <form>
  <div class="mb-1">
    <input type="email" class="form-control form-control-sm" placeholder="Email" />
  </div>
  <div class="row mb-1">
    <div class="col">
      <input type="text" class="form-control form-control-sm" placeholder="First Name" />
    </div>
    <div class="col">
      <input type="text" class="form-control form-control-sm" placeholder="Last Name" />
    </div>
  </div>
  <div class="">
    <input type="text" class="form-control form-control-sm" placeholder="Preferred Subject" />
  </div>
  <div class="mb-1">
    <input type="text" class="form-control form-control-sm" placeholder="Manageable Subject" />
  </div>
  <div class="mb-1">
    <input type="text" class="form-control form-control-sm" placeholder="Highest Education Qualification" />
  </div>
  <div class="mb-1">
    <select class="form-select form-select-sm">
      <option>Select Board</option>
      <option value="Mp Board">Mp Board</option>
      <option value="CBSE">CBSE</option>
    </select>
  </div>
  <div class="row mb-1">
    <div class="col">
      <input type="date" class="form-control form-control-sm" />
    </div>
    <div class="col">
      <input type="number" class="form-control form-control-sm" placeholder="+91 Mobile Number" />
    </div>
  </div>
  <div class="form-check mb-1">
    <input type="checkbox" class="form-check-input" id="termsCheck" />
    <label class="form-check-label small" for="termsCheck">
      By signing up, you are agreeing to our terms of use and privacy policy.
    </label>
  </div>
  <div class="d-flex justify-content-between">
    <button type="submit" class="btn btn-primary btn-sm">Initiate Verification</button>
    <button type="button" class="btn btn-secondary btn-sm">Contact Us</button>
  </div>
</form>

        </div>
        <div class="part-3 d-flex align-items-center justify-content-evenly">
            <p class="text-secondary m-0">©2023 Ankurshala</p>
            <p class="text-secondary m-0">Privacy</p>
            <p class="text-secondary m-0">Cookie preferences</p>
        </div>

      </div>
    </div>
  );
};
export default TeacherSignup;
