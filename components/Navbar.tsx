import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NavItem from "./NavItem";
import { NavItemName } from "../types";

const Navbar = () => {
  const [active, setActive] = useState<NavItemName>('About');
  const {pathname} = useRouter() 

  useEffect(()=>{
    if(pathname==='/') setActive('About')
    else if(pathname==='/projects') setActive('Projects')
    else if(pathname==='/resume') setActive('Resume')
  },[pathname])

  return (
    <section className="flex items-center justify-between px-5 py-3 my-3">
      
      <span className="text-2xl font-bold dark:text-[#64ffda]">{active}</span>
      
      <div className='text-base font-normal md:text-xl'>
            <NavItem
               active={active}
               setActive={setActive}
               name='About'
               route='/'
            />
            <NavItem
               active={active}
               setActive={setActive}
               name='Resume'
               route='/resume'
            />
            <NavItem
               active={active}
               setActive={setActive}
               name='Projects'
               route='/projects'
            />
         </div>
    </section>
  );
};
export default Navbar;
