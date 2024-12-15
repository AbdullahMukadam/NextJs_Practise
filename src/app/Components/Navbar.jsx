"use client"

import React from "react";
import {
    Navbar,
  
    NavbarContent,
    NavbarItem,
    Link,
  
} from "@nextui-org/react";



export default function App() {




    return (
        <Navbar className="w-[60vw] bg-black rounded-3xl border-1 border-gray-700 flex items-center justify-center fixed top-10 z-50 mx-auto" isBordered >




            <NavbarContent className="w-full" justify="center">

                <NavbarItem>
                    <Link className="text-white" href="#">
                        Features
                    </Link>
                </NavbarItem>
                <NavbarItem >
                    <Link className="text-white" href="#">
                        Customers
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-white" href="#">
                        Integrations
                    </Link>
                </NavbarItem>
            </NavbarContent>




        </Navbar>
    );
}

