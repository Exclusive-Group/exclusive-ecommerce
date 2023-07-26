import { ArrowSmallLeftIcon, ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { listaCategory } from "../../data/sliderCategory";
import React from "react";
type TypeProps = {
    name: string
}
const categotySlider = (props: TypeProps) => {
    return (
        <div>
            <div className="flex items-center justify-between mt-20">
                <div className="text-4xl font-semibold leading-[48px] tracking-[0.48px] mt-5">{props.name}</div>
                <div className="flex items-center gap-2">
                    <ArrowSmallLeftIcon className="w-[46px] h-[46px]  rounded-3xl bg-[#F5F5F5]" />
                    <ArrowSmallRightIcon className="w-[46px] h-[46px] rounded-3xl bg-[#F5F5F5]" />
                </div>
            </div>
            <div className="flex gap-8 mt-[60px]">
                {listaCategory.map((item) => (
                    <div className="w-[170px] h-[145px] border rounded-lg border-gray-400 grid items-center justify-center">
                        <Image src={item.url} alt={item.alt} width={56} height={56} className="m-auto" />
                        <span className="">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default categotySlider;

