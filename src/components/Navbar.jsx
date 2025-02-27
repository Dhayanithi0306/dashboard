import React from 'react'

export default function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-sm bg-body-tertiary">
        
        <div className="container-fluid bg-opacity-50"style={{backgroundColor:"rgba(135, 206, 235, 0.9)"}} >
            
              {/* Logo */}

              <a className="navbar-brand ms-4" href="/" >
               BIT INFORMATION PORTAL
              </a>

              {/* Navbar Items */}

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center" id="navList">

                    <li className="nav-item">
                        <a className="nav-link px-4" id="loginBtn" aria-current="page" href="#">Student</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link my-2 p-2  bg-info  h-auto w-auto" id="signUpBtn" style={{borderRadius:"50%",maxHeight:'35px'}} href="#"><i className="bi bi-person text-secondary  fw-2" ></i></a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#">DHAYANITHI C</a>
                    </li>

                </ul>
              </div>
          </div>
      </nav>
    </>
  )
}
