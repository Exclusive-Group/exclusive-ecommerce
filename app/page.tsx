import NavMenu from "./components/navMenu";
import Slider from "./components/slider";
import CategotySlider from "./components/categotySlider";
import React from "react";
export default function Home() {
  return (
    <div className="px-[10%]">
      <div className="flex">
        <NavMenu/>
        <Slider/>
      </div>
      <CategotySlider name={'Browse By Category'}/>
    </div>
  )
}
