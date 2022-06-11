import React, { useState } from 'react';

const Navbar = () => {

    const[activeItem,setActiveItem]=useState<string>()

    return (
        <section>
            <span>{activeItem}</span>
        <div></div>
        </section>
    );
};
export default Navbar;