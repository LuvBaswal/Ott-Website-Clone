import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import './App.scss';
import Home from "./Components/Home";
import Header from "./Components/Header";
import UriPoster from "./Components/UriPoster";

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
