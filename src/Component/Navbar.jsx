import React from 'react'
import Cart from './Cart'
import './Navbar.css'
import Logo from '../assets/TexasCrop.jpeg'

function Navbar() {
    return (
        <div>

            <nav className="navbar bg-dark border-bottom border-bottom-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">

                    <a className="navbar-brand" href="#"><img src={Logo} alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/Home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/About">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/NewArrival">New Arrival</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Contact">Contact</a>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Menu
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">White Wine</a></li>
                                    <li><a className="dropdown-item" href="#">Red Wine</a></li>
                                    <li><a className="dropdown-item" href="#">Sweeten Wine</a></li>
                                </ul>
                            </li>
                            <li>
                                <div className='left'>
                                    <Cart />
                                </div>

                            </li>
                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Navbar
