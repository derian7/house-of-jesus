import "./App.css";
import Header from "./components/Header";
import Home from "./components/HomePage";
import {Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
