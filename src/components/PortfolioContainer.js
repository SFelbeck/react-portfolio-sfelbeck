import React, { useState } from 'react';
import Display from './Display';
import Project from './Project';
import Contact from './Contact'

export default function PortfolioContainer () {
    const [currentPage, setCurrentPage] = useState('Contact');

    const renderPage = () => {
        if ( currentPage === 'Display' ){
            return <Display />;
        } else if ( currentPage === 'Project' ){
            return <Project />;
        } else if ( currentPage === 'Contact' ){
            return <Contact />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            {/* navtabs is a problem keyworm atm */}
          <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
          {renderPage()}
        </div>
      );
}