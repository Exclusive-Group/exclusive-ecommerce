"use client"
import { EyeIcon, HeartIcon } from "@heroicons/react/24/outline";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
const poppins = Poppins({ subsets: ['latin'], weight: ["400", "500", "600", "700"] })

type Product = {
    name: string;
    price: string;
    oldPrice: string;
    descount: string;
    image: string;
}

const ProductCard = ({ product }: { product: Product }) => {
    const [active, setActive] = useState("-z-10")

    return (
        <div className={`${poppins.className} min-w-[270px] relative`}>
            <div
                className="w-full h-[250px] relative bg-secondary flex justify-center items-center rounded-[4px] cursor-pointer"
                onMouseEnter={() => setActive("-z-0 -translate-y-10")}
                onMouseLeave={() => setActive("-z-10")}
            >
                <div className="absolute w-full top-0 flex justify-between p-3">
                    <div className="bg-primary rounded-[4px] w-[55px] h-[26px] flex items-center justify-center">
                        <span className="text-white text-xs leading-[18px]">
                            {product.descount}
                        </span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="p-2 rounded-full bg-white">
                            <HeartIcon className="w-4" />
                        </div>
                        <div className="p-2 rounded-full bg-white">
                            <EyeIcon className="w-4" />
                        </div>
                    </div>
                </div>
                <Image src={product.image} alt="" width={172} height={152}/>
            </div>
            <button
                className={`w-full h-10 bg-black rounded-b absolute flex items-center transition ${active}`}
                onMouseEnter={() => setActive("-z-0 -translate-y-10")}
                onMouseLeave={() => setActive("-z-10")}
            >
                <span className="text-white font-medium text-base mx-auto">
                    Add To Cart
                </span>
            </button>
            <div className="w-full h-[100px] bg-white flex flex-col gap-2 pt-4 z-20">
                <span className="font-medium text-base">
                    {product.name}
                </span>
                <div className="flex gap-3">
                    <span className="font-medium text-base text-primary">
                        {product.price}
                    </span>
                    <span className="font-medium text-base text-gray-500 line-through">
                        {product.oldPrice}
                    </span>
                </div>
            </div>
        </div>
    )
}
export default ProductCard