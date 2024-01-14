import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import pages and components
import Home from './pages/home'
import Navbar from './components/navbar'
import Housing from './components/housing';
import Safe from './components/safe_cities';
import Searchbars from './components/searchbars'
import Passport from './components/passport'

function App() {
  return (
    <div className="App"style={{ backgroundColor: '#66ddeeff' }}>
      <BrowserRouter>
        <Navbar />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="pages">
          <Routes>
            <Route 
              path="/" element={<Home />}
            />
          </Routes>
          <Housing/>
          <br></br>
          <Safe/>
          <br></br>
          <Passport/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
