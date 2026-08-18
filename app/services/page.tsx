import Whatwedo from "@/app/service_page/whatwedo";
import Web_images from "@/app/service_page/web_images";
import Uiux_images from "@/app/service_page/uiux_images";
import Branding_images from "@/app/service_page/branding_images";
import How_ww from "@/app/service_page/how_ww";
import How_ww_boxes from "@/app/service_page/how_ww_boxes";
import Startp from "@/app/service_page/startp";
import Web_button from "@/app/service_page/web_button";
import Uiux_button from "@/app/service_page/uiux_button";
import Branding_button from "@/app/service_page/branding_button";
import Service_faq from "@/app/service_page/service_faq";


import SectionTitle from "./section_title";
import StartProject from "../startproject";

const page = () => {
  return (
    <>
    
  
    <div className="bg-[#fffff0]  md:px-12 px-4">
      <Whatwedo />

      <SectionTitle
        title="Website Design & Development"
      />
      <Web_images />
      <Web_button/>

      <SectionTitle
        title="UI/UX"
      />
      <Uiux_images />
      <Uiux_button/>

      <SectionTitle
        title="Branding"
      />
      <Branding_images />
      <Branding_button/>

      <How_ww />
      <How_ww_boxes />

 
    </div>
          <Startp/>  
          <Service_faq/>                 </>

      
  );
};

export default page;
