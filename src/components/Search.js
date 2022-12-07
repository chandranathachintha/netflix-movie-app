import React,{useEffect,useState,useContext} from 'react';
import { store } from '../App';
const Search = () => {
    const [searchData, setSearchData] = useState([]);
    const [search,setSearch] = useContext(store);
    
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=26e6c70b1c0f7b13af614c4aa81998bf&query=${search}`).then(
            response =>response.json()
        ).then(data=>setSearchData(data.results))
    },[search])
    
  return (
    <div>
       <h4 className="res_heading" >Results</h4>
        <div className='d-flex flex-wrap justify-content-center'>
        { 
          searchData.length > 0 ?
            searchData.map(movie=>(
              <div className='row' key={movie.id}>
                <a href=''>
                  <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='' width='180' className='m-3 image' />
                </a>
              </div>
            )): <h3 className='res_notFound'>Sorry! No Result Found</h3>
        }    
        </div>
    </div>
  );
}

export default Search;
