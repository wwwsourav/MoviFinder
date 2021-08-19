import React, { useEffect, useState } from 'react';
const LatestMovies = () => {
    const[data, setData] = useState([])
    const getapi = () =>{
        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=538cdd5be5fc6324661d3f3bfde7abf2&language=en-US')
        .then(response => response.json())
        .then(mov => setData(mov))
    }
    useEffect(() =>{
        getapi()
    },[])
    //console.log(data)
    return ( 
        <>
            <marquee><h1>LatestMovies</h1></marquee>
            {data.length === 0 ? <h1>LOADING</h1> : <div class="container">
                <div class="row">
                    {data.results && data.results.map((data,index) =>{
                        return(
                            <div class="col-lg-3 col-md-6 col-sm-12 mt-2">
                                <div class="card" style={{width: '17rem'}}>
                                    <div class="card-body">
                                    <h5 class="card-title">Original_title: {data.original_title}</h5>
                                        <img className="img img-rounded img-thumbnail" src={"https://image.tmdb.org/t/p/w500" + data.poster_path} class="card-img-top" alt="..."/>
                                        <h5 class="card-title">Original_language: {data.original_language}</h5>
                                        <h5 class="card-title">Release_date: {data.release_date}</h5>
                                        <h5 class="card-title">Popularity: {data.popularity}</h5>
                                        <h5 class="card-title">Vote_count: {data.vote_count}</h5>
                                        <h5 class="card-title">ID: {data.id}</h5>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>} 
        </>
     );
}
 
export default LatestMovies;