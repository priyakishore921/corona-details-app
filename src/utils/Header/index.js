import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div className="head">
            <Link to='/'>Home</Link>
            <Link to='CountryWise'>Country wise Numbers</Link>
            <Link to='/'>News</Link>
            <Link to='/'>Misc</Link>
        </div>
    );
}
export default Header;