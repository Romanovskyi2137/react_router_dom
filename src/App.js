import './App.css';
import {Routes, Route, Navigate} from "react-router-dom";
import About from "./pages/About";
import Error from "./pages/Error";
import Home from "./pages/Home";
import StartPage from "./pages/StartPage";
import Layout from "./components/Layout";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import RequireAuth from './hoc/RequireAuth';
import Login from './pages/Login';
import { AuthProvider } from './hoc/AuthProvider';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<StartPage/>}/>
              <Route path="login" element={<Login/>}/>
              <Route path="home" element={<Home/>}/>
              <Route path="about" element={<About/>}>
                <Route path="contacts" element={<h3>here will be contacts component</h3>}/>
                <Route path="servises" element={<h3>here will be servises component</h3>}/>
              </Route>
              <Route path="about-us" element={<Navigate to="/about" replace/>}/>
              <Route path="posts" element={
                  <RequireAuth>
                    <Posts/>
                  </RequireAuth>
                }/>
              <Route path="posts/:id" element={<Post/>}/>
              <Route path="*" element={<Error/>}/>
            </Route>
          </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
