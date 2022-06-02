import React from 'react';

export default function NavTabs({ currentPage, handlePageChange }) {
    return(
        <ul className='nav-tabs'>
            <li className='nav-item'>
            <a href="#Display" onClick={() => handlePageChange('Display')}
            className={currentPage === 'Display' ? 'nav-link active' : 'nav-link'}
            >About Me</a>
            </li>
            <li className='nav-item'>
            <a href="#Project" onClick={() => handlePageChange('Project')}
            className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'}
            >Work</a>
            </li>
            <li className='nav-item'>
            <a href="#Contact" onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >Contact Me</a>
            </li>
            {/* resume here? */}
        </ul>
    )
}