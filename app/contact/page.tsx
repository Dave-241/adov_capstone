import Heading from "@/app/contact_page_component/heading";
import Details from "@/app/contact_page_component/details";
import Contact_faq from "@/app/contact_page_component/contact_faq";

const page = () => {
  return (
    <div className="bg-[#fffff0] flex flex-col gap-14">
      <Heading />
      <Details />
      <Contact_faq/>
    </div>
  );
};

export default page;
