import Button from "./components/button";
import NavMenu from "./components/navMenu";
import Slider from "./components/slider";
import SliderSection from "./components/sliderProductsSection";
import TagSection from "./components/tagSection";
import SliderCategory from "./components/sliderCategoriesSection "

export default function Home() {
  return (
    <div className="px-[10%]">
      <div className="flex">
        <NavMenu />
        <Slider />
      </div>
      <section id="flash_sales" className="my-36">
        <TagSection name="Today's" />
        <SliderSection name="Flash Sales" />
        <div className="w-full flex justify-center mt-14">
          <Button>
            View All Products
          </Button>
        </div>
      </section>
      <hr></hr>
      <section id="categories">
        <TagSection name="Categories" />
        <SliderCategory name="Browse By Category"/>
      </section>
    </div>
  )
}
