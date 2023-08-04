import { NavLink, Outlet } from "react-router-dom";



function Layout () {
    
    const activeLink = ({isActive}) => {
        return isActive ? "active-link" : ""
    }

    return (
        <>
            <header>
                <NavLink to="/" className={activeLink}>Start</NavLink>
                <NavLink to="/home" className={activeLink}>Home</NavLink>
                <NavLink to="/about" className={activeLink}>About</NavLink>
                <NavLink to="/posts" className={activeLink}>Posts</NavLink>
            </header>
            <main style={{fontSize: "24px"}}>
                <Outlet/>
            </main>
            <footer>
                <h3>footer.zbs</h3>
            </footer>
        </>
    )
};

export default Layout