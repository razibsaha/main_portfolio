import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>("");
  const {pathname} = useRouter() 

  useEffect(()=>{
    if(pathname==='/') setActiveItem('About')
    if(pathname==='/projects') setActiveItem('Projects')
    if(pathname==='/resume') setActiveItem('Resume')
  },[])

  return (
    <section>
      <span className="font-bold text-white">{activeItem}</span>
      <div className="flex space-x-3 text-slate-50 font-2xl">
        {activeItem !== "About" && (
          <Link href="/">
            <a>
              <span onClick={()=>setActiveItem('About')}>About</span>
            </a>
          </Link>
        )}
        {activeItem !== "Projects" && (
          <Link href="/projects">
            <a>
              <span onClick={()=>setActiveItem('Projects')}>Projects</span>
            </a>
          </Link>
        )}
        {activeItem !== "Resume" && (
          <Link href="/resume">
            <a>
              <span onClick={()=>setActiveItem('Resume')}>Resume</span>
            </a>
          </Link>
        )}
      </div>
    </section>
  );
};
export default Navbar;
