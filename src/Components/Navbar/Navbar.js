import React from 'react';
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav class=" navbar navbar-expand-lg bg-navbar">
            <div class="container-fluid">
                <a class="navbar-brand text-success fs-4 fw-bold" href="#">PORTO</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class=" collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
                        <li class="nav-item">
                            <Link class="nav-link active fw-semibold fs-6" aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active fw-semibold" aria-current="page" to="/products">Products</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link active fw-semibold" aria-current="page" to="/Contact">Contact</Link>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;