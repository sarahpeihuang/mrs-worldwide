import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import pages and components
import Home from './pages/home'
import Navbar from './components/navbar'
import Housing from './components/housing';
import Safe from './components/safe_cities';
import Searchbars from './components/searchbars'
import Passport from './components/passport'
import ParentComponent from './components/parentComponent';

function App() {
  return (
    <div className="App" style={{ background: 'radial-gradient(circle, #66ddeeff, #fd389bff)'}}>    
      <BrowserRouter>
        <Navbar />
        <br></br>
        <br></br>
        <div className="pages">
          <br></br>
          <ParentComponent />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
