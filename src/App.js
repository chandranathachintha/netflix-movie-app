import React,{createContext,useState} from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Movies from './components/Movies';
import Search from './components/Search';

export const store = createContext();
const App = () => {
  const [search, setSearch] = useState('');
  
  return (
    <div>
      <store.Provider value={[search,setSearch]}>
        <Header />
        {
          search.length > 0 ?<Search /> : <Movies /> 
        }  
        <Footer />
      </store.Provider>
    </div>
  );
}

export default App;
