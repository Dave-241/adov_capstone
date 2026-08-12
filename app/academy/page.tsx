import Nav from "@/app/academypage_component/nav";
import Section from "@/app/academypage_component/section";
import Section2 from "@/app/academypage_component/section2";
import Section3Array from "@/app/academypage_component/section3Array";
import Section4 from "@/app/academypage_component/section5Array";
import Section5Array from "@/app/academypage_component/section4";
import Section6 from "@/app/academypage_component/section6";
import Footer from "@/app/academypage_component/footer";
import StartProject from "../startproject";
const Academypage = () => {
  return (
    <div className=" bg-[#FFFFF0] font-inter">
      <Section />
      <Section2 />

      <Section5Array />

      <Section6 />
      <StartProject />
    </div>
  );
};

export default Academypage;
