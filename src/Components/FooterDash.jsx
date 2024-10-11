import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <nav>
          <ul>
            <li>
              <a href="https://www.creative-tim.com">Creative Tim</a>
            </li>
            <li>
              <a href="http://presentation.creative-tim.com">About Us</a>
            </li>
            <li>
              <a href="http://blog.creative-tim.com">Blog</a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          &copy; {new Date().getFullYear()}, Designed by Invision. Coded by Creative Tim.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
