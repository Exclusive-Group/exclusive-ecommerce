import Image from "next/image";

type TypeProps = {
    name: string
    url: string
    alt: string
}

const CardCategory = (props: TypeProps) => {
    return (
        <div className="min-w-[170px] h-[145px] border rounded-lg border-gray-400 grid items-center justify-center hover:bg-primary hover:text-white">
            <Image src={props.url} alt={props.alt} width={56} height={56} className="m-auto" />
            <span className="">{props.name}</span>
        </div>
    )
}
export default CardCategory;

