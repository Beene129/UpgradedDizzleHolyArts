import React from 'react';
import coverImage from '../../assets/cover/cover-image.png';

function Header() {

  return (
    <header>
      <div  className="flex-row header">
      <img src={coverImage} alt="Dizzle Holy Arts"></img>

      </div>

      <div className='shadow'></div>
    
      
    </header>
  );
}

export default Header;
