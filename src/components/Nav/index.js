import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import AnimatedImg from '../AnimatedIMg';


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
        <div className='sidebarlist'>
          {pages.map((Page) => (
            <li
              className={`NavBarr ${
                currentPage.name === Page.name
                }`}
              key={Page.name}
            >
              <span className='glow-on-hover'
                onClick={() => setCurrentPage(Page)}
              >
                {capitalizeFirstLetter(Page.name)}
              </span>
            </li>
          ))}
        </div>
      </nav>
    
   <AnimatedImg />
 
   </div>
  );
}

export default Nav;




