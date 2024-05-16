//imports react and the navtabs render function
import React from "react";
import NavTabs from "./NavTabs";

//a function that renders the html elements and exports the default version
export default function Header() {
    return(
        <header class="header">
            <h1>Stefan Felbeck</h1>
            {/* applies the navtabs render function here */}
            <NavTabs />
        </header>
    )
}