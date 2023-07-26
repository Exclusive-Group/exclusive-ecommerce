import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ['latin'], weight: "600" })

const TagSection = ({ name }: { name: string }) => {
    return (
        <div className={`${poppins.className} flex items-center gap-4`}>
            <div className="w-5 h-10 rounded-[4px] bg-primary" />
            <span className="font-semibold text-base leading-5 text-primary">
                {name}
            </span>
        </div>
    );
}
export default TagSection