import React from "react";
import {Outlet, Link} from "react-router-dom";


function About (props) {
    return (
        <div className="about_wrapper">
            <div className="about_container">
                <h1>About page</h1>
                <div className="links_container">
                    <Link to="contacts">Contacts</Link>
                    <Link to="servises">Servises</Link>
                </div>

                <Outlet/>
            </div>
        </div>
    )
};


export default About