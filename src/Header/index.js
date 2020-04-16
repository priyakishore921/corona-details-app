import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header className="head">
            {/* <ul> */}
            <Link to='/'>Home</Link>
            <Link to='CountryWise'>Country wise Numbers</Link>
            <Link to='/'>Home</Link>
            <Link to='/'>Home</Link>
            {/* </ul> */}
      </header>
    );
}
export default Header;