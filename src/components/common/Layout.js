import React from "react";
import Header from "../header/Header";

function Layout (props) {
    return (
        <div>
            <Header/>
            <div className="content">
                {props.children}
            </div>
        </div>
    );
}

export default Layout;