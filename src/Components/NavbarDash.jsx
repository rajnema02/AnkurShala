import React from 'react';

function NavbarDash() {
  return (
    <nav className="navbar navbar-expand-lg navbar-transparent bg-primary navbar-absolute">
      <div className="container-fluid">
        <div className="navbar-wrapper">
          <div className="navbar-toggle">
            <button type="button" className="navbar-toggler">
              <span className="navbar-toggler-bar bar1"></span>
              <span className="navbar-toggler-bar bar2"></span>
              <span className="navbar-toggler-bar bar3"></span>
            </button>
          </div>
          <a className="navbar-brand" href="#pablo">Dashboard</a>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation">
          <span className="navbar-toggler-bar navbar-kebab"></span>
          <span className="navbar-toggler-bar navbar-kebab"></span>
          <span className="navbar-toggler-bar navbar-kebab"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navigation">
          <form>
            <div className="input-group no-border">
              <input type="text" className="form-control" placeholder="Search..." />
              <div className="input-group-append">
                <div className="input-group-text">
                  <i className="now-ui-icons ui-1_zoom-bold"></i>
                </div>
              </div>
            </div>
          </form>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#pablo">
                <i className="now-ui-icons media-2_sound-wave"></i>
                <p>
                  <span className="d-lg-none d-md-block">Stats</span>
                </p>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#navbarDropdownMenuLink">
                <i className="now-ui-icons location_world"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item" href="#action">Action</a>
                <a className="dropdown-item" href="#another">Another action</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#pablo">
                <i className="now-ui-icons users_single-02"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarDash;
