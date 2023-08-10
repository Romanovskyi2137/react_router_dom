import './App.css';
import {Route, Navigate, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
import About from "./pages/About";
import Error from "./pages/Error";
import Home from "./pages/Home";
import StartPage from "./pages/StartPage";
import Layout from "./components/Layout";
import {Posts, postsLoader} from "./pages/Posts";
import Post from "./pages/Post";
import RequireAuth from './hoc/RequireAuth';
import Login from './pages/Login';
import { AuthProvider } from './hoc/AuthProvider';


const router = createBrowserRouter(createRoutesFromElements(
            <Route path="/" element={<Layout/>}>
              <Route index element={<StartPage/>}/>
              <Route path="login" element={<Login/>}/>
              <Route path="home" element={<Home/>}/>
              <Route path="about" element={<About/>}/>
              <Route path="about-us" element={<Navigate to="/about" replace/>}/>
              <Route path="posts" element={
                  <RequireAuth>
                    <Posts/>
                  </RequireAuth>
                }
                loader={postsLoader}
                />
              <Route path="posts/:id" element={<Post/>}/>
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
