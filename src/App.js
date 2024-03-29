import './App.css';
import {Route, Navigate, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
import About from "./pages/About";
import Error from "./pages/Error";
import Home from "./pages/Home";
import StartPage from "./pages/StartPage";
import Layout from "./components/Layout";
import {Posts} from "./pages/Posts";
import {Post, postLoader} from "./pages/Post";
import RequireAuth from './hoc/RequireAuth';
import Login from './pages/Login';
import { AuthProvider } from './hoc/AuthProvider';


const router = createBrowserRouter(createRoutesFromElements(
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
              <Route path="posts/:id" element={<Post/>} loader={postLoader}/>
              <Route path="*" element={<Error/>}/>
              </Route>
));

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <RouterProvider router={router}/>
      </AuthProvider>
    </div>
  );
}

export default App;
