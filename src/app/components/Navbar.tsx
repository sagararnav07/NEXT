"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "../lib/utils";
import Link from "next/link";


function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-15 inset-x-0 max-w-2xl mx-auto z-50 ", className)}>
    {/*Home menu */}
        <Menu setActive={setActive}>
            <Link href={'/'}>
               <MenuItem setActive={setActive} active={active} item = "Home">
               </MenuItem>
            </Link>
    {/*Our courses menu*/}
            <Link href={'/ourcourses'}>
              <MenuItem setActive={setActive} active={active} item = "Our courses">

              <div className="flex flex-col space-y-4 text-sm  dark:bg-black dark:text-white">
                  <HoveredLink href="/courses">All Courses</HoveredLink>
                  <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
                  <HoveredLink href="/courses">Advance Composition</HoveredLink>
                  <HoveredLink href="/courses">Songwriting</HoveredLink>
                  <HoveredLink href="/courses">Music Production</HoveredLink>
              </div>
              </MenuItem>
              </Link>
    {/*Contact menu */}
             <Link href ={'/Contacts'}>
             <MenuItem setActive={setActive} active={active} item = "Contact Us">

             </MenuItem>
             </Link>
             

            

      </Menu>
   </div>
  )
}

export default Navbar