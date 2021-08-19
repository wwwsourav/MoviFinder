import React, {useState ,useEffect } from 'react';
const Home = () => {
    const[name, setName] = useState('')
    const[mov, setMov] = useState([])
    const getapi = () =>{
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=538cdd5be5fc6324661d3f3bfde7abf2&language=en-US&page=1&include_adult=false&query=${name}`)
        .then(response => response.json())
        .then(data => setMov(data))
    }
    const[data, setData] = useState([])
    const getsapi = () =>{
        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=538cdd5be5fc6324661d3f3bfde7abf2&language=en-US')
        .then(response => response.json())
        .then(mov => setData(mov))
    }
    useEffect(() =>{
        getsapi()
    },[])
   // console.log(mov)
    return ( 
        <>
            <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="dispaly-1"><b>Welcome to Movie App</b></h1>
                        <p class="lead"><b>This is a place where you can find all of your favourite movies with details</b></p>
                        <input id="search" type="text" className="form-control text-area" placeholder="Search any movie" onChange={e=> setName(e.target.value)}></input><br></br>
                        <button type="submit" onClick={getapi} className="btn btn-lg btn-dark">search</button>
                    </div>
                </div>
                {mov.length === 0 ?
                <div class="container">
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
            </div>
                
                : <div class="container">
                <div class="row">
                    {mov.results && mov.results.map((data,index) =>{
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
 
export default Home;