"use client"
import { listaCategory } from "@/app/data/sliderCategory"
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline"
import { useRef } from "react"
import ProductCard from "../productCard"
import CardCategory from "../cardCategory"

type TypeProps = {
    name: string
}

const SliderCategoriesSection = (props: TypeProps) => {

    const scrollRef = useRef<HTMLDivElement>(null);

    const slideLeft = () => {
        scrollRef.current!.scrollLeft -= 1100
    }

    const slideRight = () => {
        scrollRef.current!.scrollLeft += 1100
    }

    return (
        <div className="w-full h-full">
            <div className="flex justify-between items-center w-full my-10">
                <div>
                    <span className="font-semibold text-4xl leading-none tracking-normal mt-6 mb-10">
                        {props.name}
                    </span>
                </div>
                <div className="flex gap-3">
                    <button className="arrowButton" onClick={slideLeft}>
                        <ArrowLeftIcon className="w-6" />
                    </button>
                    <button className="arrowButton" onClick={slideRight}>
                        <ArrowRightIcon className="w-6" />
                    </button>
                </div>
            </div>
            <div ref={scrollRef} className="overflow-hidden scroll-smooth flex gap-[30px]">
                {listaCategory.map((categorie) => (
                    <CardCategory name={categorie.name} url={categorie.url} alt={categorie.alt}/>
                ))}
            </div>
        </div>
    )
}
export default SliderCategoriesSection