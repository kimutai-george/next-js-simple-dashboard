import Link from "next/link";
import { ReactNode } from "react";
import { RxDashboard, RxPerson, RxSketchLogo } from 'react-icons/rx'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { FiSettings } from 'react-icons/fi'

interface SidebarProps {
    children: ReactNode
}
const Sidebar:React.FC<SidebarProps> = ({
    children
}) => {
    return ( 
        <div className="flex">
            <div 
            className="
            fixed 
            w-20 
            p-4
            h-screen 
            bg-white 
            border-r-[1px] 
            flex
            flex-col
            justify-between
            shadow-lg ">
                <div className="flex flex-col items-center">
                    <Link href='/'>
                        <div className="bg-purple-800 text-white p-3 rounded-lg inline-block">
                            <RxSketchLogo size={20} />
                        </div>
                    </Link>
                    <span className="border-b-[1px] border-gray-200 w-full p-1"></span>
                    <Link href='/'>
                        <div className="bg-gray-100 hover:bg-gray-200 cursor-point my-4 p-3 rounded-lg inline-block">
                            <RxDashboard size={20} />
                        </div>
                    </Link>

                    <Link href='/customers'>
                        <div className="bg-gray-100 hover:bg-gray-200 cursor-point my-4 p-3 rounded-lg inline-block">
                            <RxPerson size={20} />
                        </div>
                    </Link>
                    <Link href='/'>
                        <div className="bg-gray-100 hover:bg-gray-200 cursor-point my-4 p-3 rounded-lg inline-block">
                            <HiOutlineShoppingBag size={20} />
                        </div>
                    </Link>

                    <Link href='/'>
                        <div className="bg-gray-100 hover:bg-gray-200 cursor-point my-4 p-3 rounded-lg inline-block">
                            <FiSettings size={20} />
                        </div>
                    </Link>
                </div>
            </div>
            <main className="ml-20 w-full">
            {children}
            </main>
        </div>
     );
}
 
export default Sidebar;