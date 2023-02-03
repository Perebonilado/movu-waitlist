import Navbar from "@/components/common/navbar";
import Jumbotron from "@/components/waitList/jumbotron";
import ImageTextBoxContainer from "@/components/waitList/imageTextBoxContainer";
import CreatorSignupBox from "@/components/waitList/CreatorSignupBox";
import imageTextData from "../json/WaitListImageTextData.json";
import FaqSection from "@/components/waitList/faqSection";
import Footer from "@/components/common/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <ImageTextBoxContainer data={imageTextData} />
      <CreatorSignupBox />
      <FaqSection />
      <Footer />
    </>
  );
}
