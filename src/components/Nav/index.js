import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import "./Sidebar.css"

function Nav(props) {
  const {
    pages = [],
    setCurrentPage,
    currentPage,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage.name);
  }, [currentPage]);

  return (  
    <div className='sidebar'>
      <nav>
        <ul className="column ">
          {pages.map((Page) => (
            <li
              className={`NavBarr ${
                currentPage.name === Page.name && 'navActive'
                }`}
              key={Page.name}
            >
              <span className=' glow-on-hover'
                onClick={() => setCurrentPage(Page)}
              >
                {capitalizeFirstLetter(Page.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
      </div>  
  );
}

export default Nav;




