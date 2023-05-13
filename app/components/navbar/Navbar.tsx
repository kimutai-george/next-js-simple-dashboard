'use client'

import Logo from "./Logo"
import Search from "./Search"
import UserMenu from "./UserMenu"
import Categories from "./Categories"
import Container from "../Container"

const Navbar = () => {
    return (
        <div className="fixed  w-full bg-white  z-10 shadow-lg">
            <div className="py-4 border-b-[1px]">
                <Container>
                <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                <h1 className=" ml-2 text-2xl font-bold bg-gradient-to-r from-orange-400 to-blue-800 text-transparent bg-clip-text">Company</h1>
                    <div className="mr-5">
                    <UserMenu/>
                    </div>
                </div>
                </Container>
                
            </div>
        </div>
      
    )
}

export default Navbar