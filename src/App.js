import './App.css';
import {Routes, Route} from "react-router-dom";
import About from "./pages/About";
import Error from "./pages/Error";
import Home from "./pages/Home";
import StartPage from "./pages/StartPage";
import Layout from "./components/Layout";
import Posts from "./pages/Posts";
import Post from "./pages/Post"

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<StartPage/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/posts" element={<Posts/>}/>
            <Route path="/posts/:id" element={<Post/>}/>
            <Route path="*" element={<Error/>}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
