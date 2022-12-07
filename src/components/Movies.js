import React,{useState,useEffect} from 'react';

const Movies = () => {
    const [data , setdData] = useState([]);
    const [upcomming, setUpcomming] = useState([]);
    const [nowPlaying, setNowPlaying] = useState([]);
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=26e6c70b1c0f7b13af614c4aa81998bf').then(
            response =>response.json()
        ).then(data=>setdData(data.results.slice(0,12)))
        fetch(' https://api.themoviedb.org/3/movie/upcoming?api_key=26e6c70b1c0f7b13af614c4aa81998bf').then(
            response =>response.json()
        ).then(data=>setUpcomming(data.results.slice(0,12)))
        fetch(' https://api.themoviedb.org/3/movie/now_playing?api_key=26e6c70b1c0f7b13af614c4aa81998bf').then(
            response =>response.json()
        ).then(data=>setNowPlaying(data.results.slice(0,18)))
    },[])
    
  return (
    <div className='movies'>

        {/* Popular on Netflix */}
        
        <h4 className="pop_heading" >Popular on Netflix</h4>
        <div className='d-flex flex-wrap justify-content-center'>
        {
          data.map(movie=>(
            <div className='row' key={movie.id}>
              <a href=''>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='' width='180' className='m-3 image' />
              </a>
            </div>
          ))
        }    
        </div> 

        {/* Now Playing Movies */}

        <h4 className="up_heading" >Now Playing</h4>
        <div className='d-flex flex-wrap justify-content-center'>
        {
          nowPlaying.map(movie=>(
            <div className='row' key={movie.id}>
              <a href=''>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='' width='180' className='m-3 image' />
              </a>
            </div>
          ))
        }    
        </div> 

        {/* Upcoming  movies */}

        <h4 className="up_heading" >Upcoming</h4>
        <div className='d-flex flex-wrap justify-content-center'>
        {
          upcomming.map(movie=>(
            <div className='row' key={movie.id}>
              <a href=''>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='' width='180' className='m-3 image' />
              </a>
            </div>
          ))
        }    
        </div>  
    </div>
  );
}

export default Movies;
