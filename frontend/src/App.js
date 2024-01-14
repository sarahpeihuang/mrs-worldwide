import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import pages and components
import Home from './pages/home'
import Navbar from './components/navbar'
import Housing from './components/housing';
import Safe from './components/safe_cities';
import Searchbars from './components/searchbars'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/" element={<Home />}
            />
          </Routes>
          <Housing/>
          <Safe/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
