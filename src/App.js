import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <main> 
        <Routes>
          <Route path="/" component={<Home/>}/>
          <Route path="about" component={<About/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
