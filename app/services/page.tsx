import Whatwedo from "@/app/service_page/whatwedo";
import Web_images from "@/app/service_page/web_images";
import Uiux_images from "@/app/service_page/uiux_images";
import Branding_images from "@/app/service_page/branding_images";
import How_ww from "@/app/service_page/how_ww";
import How_ww_boxes from "@/app/service_page/how_ww_boxes";

import wimage from "@/public/wimage.png";
import uiux_image from "@/public/uiux_image.png";
import bimage from "@/public/bimage.png";
import SectionTitle from "./section_title";
import StartProject from "../startproject";

const page = () => {
  return (
    <>
    
  
    <div className="bg-[#fffff0]  md:px-12 px-4">
      <Whatwedo />

      <SectionTitle
        image={wimage}
        title="Websites That Perform Beyond Expectations."
        subtext="Innovative technology. Real business impact."
      />
      <Web_images />

      <SectionTitle
        image={uiux_image}
        title="UI/UX"
        subtext="Creating user experiences that simplify, engage and inspire."
      />
      <Uiux_images />

      <SectionTitle
        image={bimage}
        title="Branding"
        subtext="Building brands that inspire trust and lasting connection."
      />
      <Branding_images />

      <How_ww />
      <How_ww_boxes />

 
    </div>
               <StartProject />
                 </>
  );
};

export default page;
