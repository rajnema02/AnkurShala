import React from 'react';
import full from '../assets/img/image 1.png';
import half from '../assets/img/half.png'
const Main = () => {
  return (
    <div>
      <div
        className="main"
        style={{
          backgroundImage: `url(${full})`,
          height: '100vh',
          width: '100vw',
          backgroundSize: 'cover',
          backgroundPosition: 'center', 
        }}
      >
     <div
      style={{
        display: "flex",
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        height: "100vh", // Full height of the viewport
      }}
    >
      <div className="card mb-3" style={{ maxWidth: '600px', height: 'auto', overflow: 'hidden' }}>
        <div className="row g-0 h-100">
          <div className="col-md-4" style={{ backgroundColor: '#1291A3', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img
              src={half}
              className="img-fluid rounded-start"
              alt="Description of image"
              style={{
                maxHeight: '80%', // Adjust the height as needed
                maxWidth: '80%', // Adjust the width as needed
                objectFit: 'cover',
              }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              {/* Input Fields */}
              <div className="mb-3">
                   <h6 className='text-center'>Book Now For The Difference</h6>
                <label htmlFor="classInput" className="form-label"> Class</label>
                <input type="text" className="form-control" id="classInput" placeholder="Enter class" />
              </div>
              <div className="mb-3">
                <label htmlFor="subjectInput" className="form-label">Select Subject</label>
                <input type="text" className="form-control" id="subjectInput" placeholder="Enter subject" />
              </div>
              <div className="mb-3">
                <label htmlFor="topicInput" className="form-label">Select Topic</label>
                <input type="text" className="form-control" id="topicInput" placeholder="Enter topic" />
              </div>
              
              {/* Try Now For Free Heading */}
              <h5 className="mt-3">Try Now for Free</h5>
              
              {/* Join Button */}
              <button className="btn mb-3 me-2 " style={{backgroundColor: 'black',color:'white'}}>Join in Now</button>
              <button className="btn btn-secondary mb-3 " style={{color: 'black'}}>Schedule for later</button>
              
              <h5>Other Resources:</h5>
              
              <i class="ri-graduation-cap-fill"></i><button className="btn btn-link me-4 "style={{textDecoration:'none'}} >About Us</button>
              
              <i class="ri-book-fill"></i><button className="btn btn-link" style={{textDecoration:'none'}}>E-book</button>
            
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Main;
