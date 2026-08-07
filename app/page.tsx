import Whatwedo from "@/app/service_page/whatwedo";
import Web_title from "@/app/service_page/web_title";
import Web_images from "@/app/service_page/web_images";
import Uiux_title from "@/app/service_page/uiux_title";
import Uiux_images from "@/app/service_page/uiux_images";
import Branding_title from "@/app/service_page/branding_title";
import Branding_images from "@/app/service_page/branding_images";
import How_ww from "@/app/service_page/how_ww";
import How_ww_boxes from "@/app/service_page/how_ww_boxes";

const page = () => {
  return (
    <div className="bg-[#fffff0]">
      <Whatwedo />
      <Web_title />
      <Web_images />
      <Uiux_title />
      <Uiux_images />
      <Branding_title />
      <Branding_images />
      <How_ww />
      <How_ww_boxes />
    </div>
  );
};

export default page;
