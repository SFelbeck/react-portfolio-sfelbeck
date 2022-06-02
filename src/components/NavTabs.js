import React from 'react';

export default function NavTabs({ currentPage, handlePageChange }) {

    // const handleInputChange = event => {
    //     const { name, value } = event.target;
    // }



    return(
        <nav>
            <a href="/">About Me</a>
            <a href="/Project">Work</a>
            <a href="/Contact">Contact Me</a>
            {/* resume here? */}
        </nav>
    )
}