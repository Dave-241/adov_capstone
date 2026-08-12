import Train from "./train";
import WhyUs from "./faq";
import StartProject from "./startproject";
import Founders from "./founders";
import Hero from "./hompage_component/hero";
import Services from "./hompage_component/services";
import Work from "./hompage_component/work";
import Projectvideo from "./hompage_component/projectvideo";

const page = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Work />
      <Projectvideo />
      <Train />
      <WhyUs />
      <Founders />
      <StartProject />
    </main>
  );
};

export default page;
