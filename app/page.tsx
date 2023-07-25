import NavMenu from "./components/navMenu";
import Slider from "./components/slider";

export default function Home() {
  return (
    <div className="px-[10%]">
      <div className="flex">
        <NavMenu />
        <Slider/>
      </div>
    </div>
  )
}
