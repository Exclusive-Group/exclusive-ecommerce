"use client"
import { ChevronRightIcon } from "@heroicons/react/24/outline"
import { useState } from "react"

type TypeProps = {
    name: string,
    list: string[]
}

const NavMenuItem = (props: TypeProps) => {
    const [isVisible, setIsVisible] = useState("hidden")
    return (
        <div className='flex relative w-full'>
            <div
                className='flex justify-between items-center cursor-pointer w-full'
                onMouseEnter={() => setIsVisible("inline-block")}
                onMouseLeave={() => setIsVisible("hidden")}>
                <span>
                    {props.name}
                </span>
                <ChevronRightIcon className='w-5' />
            </div>
            <div
                className={`${isVisible} bg-white shadow-2xl p-4 rounded-lg absolute z-10 left-full w-56`}
                onMouseEnter={() => setIsVisible("inline-block")}
                onMouseLeave={() => setIsVisible("hidden")}>
                <ul className="flex flex-col">
                    {props.list.map((item, index) => (
                        <li key={index}>
                            <a href="" className="hover:underline">
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default NavMenuItem