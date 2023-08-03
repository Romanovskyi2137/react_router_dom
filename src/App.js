import './App.css';
import {Routes, Route, Link, BrowserRouter} from "react-router-dom";
import About from "./pages/About";
import Error from "./pages/Error";
import Home from "./pages/Home";
import StartPage from "./pages/StartPage";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<StartPage/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="*" element={<Error/>}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
