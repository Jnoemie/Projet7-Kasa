import {Routes, Route} from "react-router-dom";

import Home from "./Pages/Home";
import Header from "./Components/Header";

//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />        
      </Routes>
    </div>
  );
}

export default App;