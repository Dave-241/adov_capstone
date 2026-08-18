import Train from "./train";
import WhyUs from "./faq";
import StartProject from "./startproject";
import Founders from "./founders";
import Hero from "./hompage_component/hero";
import Services from "./hompage_component/services";
import Work from "./hompage_component/work";
import Projectvideo from "./hompage_component/projectvideo";
import Test from "./hompage_component/test";

const page = () => {
  return (
    <main className="bg-[#fffff0]">
      <Hero />

      <Services />
      <Work />
      <Projectvideo />
      <WhyUs />
      <Train />
      <Founders />
      <StartProject />
      <Test />
    </main>
  );
};

export default page;
