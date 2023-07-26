import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ['latin'], weight: "400" })

const Button = ({children}: {children: React.ReactNode}) => {
    return (
        <button 
            className={`bg-primary rounded text-base px-12 py-4 text-center text-white ${poppins.className}`}>
            {children}
        </button>
    )
}
export default Button