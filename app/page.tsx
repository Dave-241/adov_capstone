import Hero from "./hompage_component/hero";
import Services from "./hompage_component/services";
import Work from "./hompage_component/work";
import Projectvideo from "./hompage_component/projectvideo";

const page = () => {
  return (
    <div className="bg-[#FFFFF0]">
      <Hero />
      <Services />
      <Work />
      <Projectvideo />
    </div>
  );
};

export default page;
