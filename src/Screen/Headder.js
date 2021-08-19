import React from 'react';
import { Link } from 'react-router-dom';
const Headder = () => {
    return ( 
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <Link class="nav-link text-white" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-white" to="LatestMovies">Latest Movies</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-white" to="PopularMovies">Popular Movies</Link>
                            </li>
                        </ul>
                    </div>
            </nav>
        </>
     );
}
 
export default Headder;