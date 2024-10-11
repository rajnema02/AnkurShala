import React from "react";
import '../assets/css_main/bootstrap.min.css';
// import '../assets/css/bootstrap.min.css.map';
import '../assets/css_main/paper-dashboard.css';
// import '../assets/css/paper-dashboard.css.map';
import '../assets/css_main/paper-dashboard.min.css';
import logo from '../assets/Images/bg_remove-removebg-preview 2.png'

import user from '../assets/Images/Customer.png';
import home from '../assets/Dashboard/home.png'
import assignment from '../assets/Dashboard/assignment.png'
import content from '../assets/Dashboard/content_copy.png'
import layers from '../assets/Dashboard/layers.png'
import perm from '../assets/Dashboard/perm_media.png'
import pie from '../assets/Dashboard/pie_chart.png'
import swap from '../assets/Dashboard/swap_calls.png'
import text from '../assets/Dashboard/text_fields.png'
import update from '../assets/Dashboard/update.png'
import view from '../assets/Dashboard/view_list.png'
import widgets from '../assets/Dashboard/widgets.png'
import search from '../assets/Dashboard/search.png'
import notification from '../assets/Dashboard/notifications.png'
import move from '../assets/Dashboard/more_vert.png'
import flag from '../assets/Dashboard/flag.png'
import forum from '../assets/Dashboard/forum.png'
import help from '../assets/Dashboard/help.png'
import Schedule from '../assets/Dashboard/Schedule.png'
import playlist from '../assets/Dashboard/playlist_add_check.png'


// import logoSmall from '../assets/img/logo-small.png'; 

const DashBoard_Main =()=>{
  return(
      <div className="wrapper">
      <div className="sidebar" data-color="white" data-active-color="danger">
        <div className="logo text-white " style={{background: '#0B527A', color:'white',height:'27vh', width:'16vw'}}>
          <a
            href="#"
            className="simple-text logo-mini"
          >
            <div className="logo-image-small">
              <img className="h-100 w-100" src={logo} alt="Logo" />
            </div>
          </a>
          <a
            href="#"
            className="simple-text logo-normal text-white mb-5"
          >
            <h5 style={{fontSize:'22px', fontWeight:'600',lineHeight:'8px'}}>AnkurShala</h5>
            <span style={{fontSize:"14px"}}>On Demand Learning</span>
          </a>
          <div className="contain d-flex " style={{color:'black'}}>
          <div>
            <img src={user} alt="" />
          </div>
          <div>
            John Doe 
            johndoe@example.com
          </div>
          </div>
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            <li className="active">
              <a href="#">
                <img  src={home} alt="" />
                <h5>Home</h5>
              </a>
            </li>
            <li>
              <a href="#">
              <img src={text} alt="" />
                <p>Edit Profile</p>
              </a>
            </li>
            <li>
              <a href="#">
              <img src={layers} alt="" />
              <p>Subject Selection</p>
              </a>
            </li>
            <li>
              <a href="#">
              <img src={widgets} alt="" />
                <p>Plateform Support</p>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={swap} alt="" />
                <p>Contact a Teacher</p>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={assignment} alt="" />
                <p>Sechdule a Class</p>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={view} alt="" />
                <p>Class Sechdule</p>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={perm} alt="" />
                <p>Study Materials</p>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={pie} alt="" />
                <p>Performance</p>
              </a>
            </li>
            <hr />
            <li>
              <a href="#">
                <img src={content} alt="" />
                <p>Content Copy</p>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={update} alt="" />
                <p>Recent Changes</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="main-panel">
        <div className="" style={{backgroundColor:'#0B527A', height:'74px'}}>
            <ul className="d-flex p-4 pl-4" style={{flexDirection:"row-reverse",}}>
              <a className="pl-4"><img src={move}></img></a>
              <a className="pl-4"><img src={flag}></img></a>
              <a className="pl-4"><img src={notification}></img></a>
              <a className="pl-4"><img src={search}></img></a>

            </ul>
        </div>
        
        <div className="content">
          <div className="row">
            <h5>Dashboard</h5>
            <div className="col-lg-3 col-md-6 col-sm-6 ">
              <div className="card card-stats bg-danger text-white">
                <div className="card-body">
                  <div className="row">
                    <div className="col-5 col-md-4">
                      <div className="icon-big text-center icon-warning">
                        <img style={{color:"black"}} src={playlist}></img>
                      </div>
                    </div>
                    <div className="col-7 col-md-8">
                      <div className="numbers">
                        <p className="card-category text-white">New Tasks</p>
                        <p className="card-title text-white">125</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card card-stats bg-primary">
                <div className="card-body">
                  <div className="row">
                    <div className="col-5 col-md-4">
                      <div className="icon-big text-center icon-warning">
                      <img style={{color:"black"}} src={help}></img>
                      </div>
                    </div>
                    <div className="col-7 col-md-8">
                      <div className="numbers">
                        <p className="card-category text-white">Total queries asked</p>
                        <p className="card-title text-white">257</p>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card card-stats bg-success">
                <div className="card-body">
                  <div className="row">
                    <div className="col-5 col-md-4">
                      <div className="icon-big text-center icon-warning">
                      <img style={{color:"black"}} src={playlist}></img>

                      </div>
                    </div>
                    <div className="col-7 col-md-8">
                      <div className="numbers">
                        <p className="card-category text-white ">New Comments</p>
                        <p className="card-title text-white">243</p>
                      </div>
                    </div>
                  </div>
                </div>
               
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card card-stats bg-warning">
                <div className="card-body">
                  <div className="row">
                    <div className="col-5 col-md-4">
                      <div className="icon-big text-center icon-warning bg-">
                      <img style={{color:"black"}} src={help}></img>
                      </div>
                    </div>
                    <div className="col-7 col-md-8">
                      <div className="numbers">
                        <p className="card-category text-white">Total Classes</p>
                        <p className="card-title text-white">10</p>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="card ">
              <div class="card-header ">
                <h5 class="card-title text-white">Users Behavior</h5>
                <p class="card-category text-white">24 Hours performance</p>
              </div>
              <div class="card-body ">
                <canvas id="chartHours" width="400" height="100"></canvas>
              </div>
              <div class="card-footer ">
                
                <div class="stats">
                  <i class="fa fa-history"></i> Updated 3 minutes ago
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="card ">
              <div class="card-header ">
                <h5 class="card-title">Email Statistics</h5>
                <p class="card-category">Last Campaign Performance</p>
              </div>
              <div class="card-body ">
                <canvas id="chartEmail"></canvas>
              </div>
              <div class="card-footer ">
                <div class="legend">
                  <i class="fa fa-circle text-primary"></i> Opened
                  <i class="fa fa-circle text-warning"></i> Read
                  <i class="fa fa-circle text-danger"></i> Deleted
                  <i class="fa fa-circle text-gray"></i> Unopened
                </div>
                {/* <hr> */}
                <div class="stats">
                  <i class="fa fa-calendar"></i> Number of emails sent
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <div class="card card-chart">
              <div class="card-header">
                <h5 class="card-title">NASDAQ: AAPL</h5>
                <p class="card-category">Line Chart with Points</p>
              </div>
              <div class="card-body">
                <canvas id="speedChart" width="400" height="100"></canvas>
              </div>
              <div class="card-footer">
                <div class="chart-legend">
                  <i class="fa fa-circle text-info"></i> Tesla Model S
                  <i class="fa fa-circle text-warning"></i> BMW 5 Series
                </div>
                <hr />
                <div class="card-stats">
                  <i class="fa fa-check"></i> Data information certified
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <footer class="footer footer-black  footer-white ">
        <div class="container-fluid">
          <div class="row">
            <nav class="footer-nav">
              <ul>
                <li><a href="https://www.creative-tim.com" target="_blank">Creative Tim</a></li>
                <li><a href="https://www.creative-tim.com/blog" target="_blank">Blog</a></li>
                <li><a href="https://www.creative-tim.com/license" target="_blank">Licenses</a></li>
              </ul>
            </nav>
            <div class="credits ml-auto">
              <span class="copyright">
                © <script>
                  document.write(new Date().getFullYear())
                </script>, made with <i class="fa fa-heart heart"></i> by Creative Tim
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </div>
  )
}
  
 
export default DashBoard_Main;
