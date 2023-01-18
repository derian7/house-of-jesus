import Header from "./components/Header";
import Home from "./components/HomePage";
import {Routes, Route} from 'react-router-dom'

import "./App.css";

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
