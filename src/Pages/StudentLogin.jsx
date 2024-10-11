import React from 'react';
import logo from '../assets/Images/bg_remove-removebg-preview 2.png'
import img1 from '../assets/Images/undraw_Graduation_re_gthn-removebg-preview 1.png'
import img2 from '../assets/Images/undraw_Certificate_re_yadi-removebg-preview 1.png'
import img4 from '../assets/Images/undraw_Teacher_re_sico 1.png'
import '../assets/pages-css/StudentLogin.css'
const StudentLogin = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
      <div className="row" style={{ width: '100%',height:'100vh', display:'flex' }}>
        <div className="sec-1 col-8" style={{ Height: '100%', backgroundColor: '#0B527A',  }}>
          <div className="part-1 text-white" style={{ marginLeft: '12vw', position:'relative'}}>
            <div className="logo d-flex mt-3" >
              <img src={logo} alt="Ankurshala logo" />
              &nbsp;&nbsp;
              <span>
                <h2 >Ankurshala</h2>
                <h4 style={{lineHeight:'0.1vh'}}>On Demand Learning</h4>
              </span>
            </div>
            <br /><br /><br /><br /><br />
            <h1>It's good to</h1>
            <h1>see you</h1>
            <img
              id="img1"
              src={img1}
              alt="Graduation illustration"
            />
          </div>
          <div className="part-2" >
            <img
              id="img2"
              src={img2}
              alt="Certificate illustration"
            />
          </div>
        </div>
        <div className="sec-2 col-4">
          <div className="part-1">
            <div id="image" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
              {/* <div>
                <img
                  id="img3"
                  src={img3}
                  alt="Teacher illustration"
                />
                <h3 className="text-center">Teacher</h3>
              </div> */}

              <div>
                <img id="img4" src={img4}alt="Student illustration" />
                <h3 className="text-center">Student</h3>
              </div>
            </div>
            <h4 style={{ margin: '2vh 0 12vh 0' }}>Sign In</h4>
            <form onSubmit={handleSubmit}>
              <input type="email" placeholder="Email" required /><br />
              <input type="checkbox" />Remember me<br />
              <p>By signing in, you are agreeing to our applicable terms</p>
              <button type="submit" className="btn">Continue</button><br/> <br/> <br/>
            </form>
          </div>
          <div className="part-2">
            <p>©2023 Ankurshala</p>
            <p>Privacy</p>
            <p>Cookie preferences</p>
          </div>
        </div>
      </div>
  );
}

export default StudentLogin;