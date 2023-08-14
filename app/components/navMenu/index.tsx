import NavMenuItem from '../navMenuItem';
import { wonmansList } from '../../data/navMenu';
import { mansList } from '../../data/navMenu';
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ['latin'], weight: "400" })

const NavMenu = () => {
  return (
    <div className='border-r w-fit pt-10 pr-4'>
      <div className={`${poppins.className} text-base flex flex-col leading-6 gap-4 w-[217px]`}>
        <NavMenuItem name={'Woman\'s Fashion'} list={wonmansList} />
        <NavMenuItem name={'Man\'s Fashion'} list={mansList} />
        <a href="">Eletronics</a>
        <a href="">Home & Lifestyle</a>
        <a href="">Medicine</a>
        <a href="">Sports & Outdoor</a>
        <a href="">Baby's & Toys</a>
        <a href="">Groceries & Pets</a>
        <a href="">Heath & Beauty</a>
      </div>
    </div>
  )
}
export default NavMenu