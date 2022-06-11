import React, { FunctionComponent, useState } from 'react';

import Link from "next/link";

const NavItem:FunctionComponent<{
    activeItem:string,
    setActiveItem:Function,
    name:string,
    route:string
}> = ({activeItem,name,route,setActiveItem}) => {
    return (
        activeItem !== name ? (
            <Link href="/">
              <a>
                <span onClick={()=>setActiveItem('About')}>About</span>
              </a>
            </Link>

        ):null
    )
};
export default NavItem;