import { HeartIcon, MagnifyingGlassIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ['latin'], weight: "400" })
const NavBar = () => {
    return (
        <div className="px-[10%] pt-10 pb-4 border-b">
            <div className="flex justify-between items-center">
                <a href="#" className="font-bold text-2xl leading-6 tracking-[0.48px]">Exclusive</a>
                <nav>
                    <ul className={`${poppins.className} flex gap-12 underline`}>
                        <li><a href="#" className="">Home</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Sign Up</a></li>
                    </ul>
                </nav>
                <div className="flex gap-6">
                    <div className="relative w-fit">
                        <input className="bg-[#f5f5f5] py-[10px] pl-5 rounded-[4px] focus:outline-none"
                            name="" id="" placeholder="What are you looking for?" />
                        <MagnifyingGlassIcon className="w-5 absolute right-4 top-3" />
                    </div>
                    <div className="flex gap-4">
                        <HeartIcon className="w-5" />
                        <ShoppingCartIcon className="w-5" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NavBar;
