import { PaperAirplaneIcon } from "@heroicons/react/24/outline"
import qrCode from "../../../public/qrcode.png"
import playstore from "../../../public/playstore.png"
import applestore from "../../../public/download-appstore.png"
import facebook from "../../../public/facebook.svg"
import twitter from "../../../public/twitter.png"
import instagram from "../../../public/instagram.png"
import linkedin from "../../../public/linkedin.png"
import Image from "next/image"
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ['latin'], weight: ["400", "500", "600"]})

const Footer = () => {
    return (
        <footer className={`${poppins.className} bg-black `}>
            <div className="flex pt-20 px-[135px] pb-[60px] justify-between gap-4">
                <div className="flex flex-col gap-6 w-1/5">
                    <span className="text-title-gray font-bold text-2xl leading-6 tracking-wide">
                        Exclusive
                    </span>
                    <span className="text-title-gray font-medium text-xl">
                        Subscribe
                    </span>
                    <span className=" text-title-gray font-normal text-base leading-[30px]">
                        Get 10% off your first order
                    </span>
                    <div className="relative w-[100%]">
                        <input
                            type="email" placeholder="Enter your email"
                            className="w-full h-12 bg-transparent pl-4 py-3 border border-light text-secondary rounded" />
                        <PaperAirplaneIcon className="w-5 absolute right-3 top-[15px] text-white" />
                    </div>
                </div>
                <div className="w-1/5">
                    <h3 className="footer-title">
                        Support
                    </h3>
                    <div className="flex flex-col gap-4">
                        <span className="footer-content">
                            677, Bairro Recreio, Vitória da Conquista, Bahia, Brasil.
                        </span>
                        <span className="footer-content">
                            exclusive@gmail.com
                        </span>
                        <span className="footer-content">
                            +55 (77) 988316361
                        </span>
                    </div>
                </div>
                <div>
                    <h3 className="footer-title">Account</h3>
                    <ul className="footer-list flex flex-col gap-4">
                        <li><a href="">My Account</a></li>
                        <li><a href="">Login / Register</a></li>
                        <li><a href="">Cart</a></li>
                        <li><a href="">Whishlist</a></li>
                        <li><a href="">Shop</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="footer-title">Quick Link</h3>
                    <ul className="footer-list flex flex-col gap-4">
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Terms Of Use</a></li>
                        <li><a href="">FAQ</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="footer-title">Download App</h3>
                    <div>
                        <span className="font-medium text-title-gray text-xs leading-[8px]">
                            Save $3 with App New User Only
                        </span>
                        <div className="flex gap-3 mt-3">
                            <Image src={qrCode} alt="qr-code" />
                            <div className="flex flex-col gap-3">
                                <Image src={playstore} alt="playstore" />
                                <Image src={applestore} alt="applestore" />
                            </div>
                        </div>
                        <div className="flex justify-between mt-3">
                            <Image className="w-6" src={facebook} alt="facebook-icon" />
                            <Image className="w-6" src={twitter} alt="twitter-icon" />
                            <Image className="w-6" src={instagram} alt="instagram-icon" />
                            <Image className="w-6" src={linkedin} alt="linkedin-icon" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-light pt-4 pb-6">
                <p className="font-normal text-base text-light mx-auto text-center">
                    &#9400; Copyright Exclusive Group 2023. All right reserved
                </p>
            </div>
        </footer>
    )
}
export default Footer