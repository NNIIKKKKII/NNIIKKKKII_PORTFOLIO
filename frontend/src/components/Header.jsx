
import React from 'react';

const Header = ({ pretitle, title }) => {
    return (

        <div className="text-center">
            <p className="text-gray-600">{pretitle}</p>
            <h1 className="font-bold mt-2 text-5xl text-black">{title}</h1>
        </div>

    );
};

export default Header;

