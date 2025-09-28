import ActionSection from "@/components/homepage/ActionSection";
import ContactSection from "@/components/homepage/ContactSection";
import FeatureSection from "@/components/homepage/FeatureSection";
import BannerSection from "@/components/homepage/HomeBanner";
import TestimonialSection from "@/components/homepage/Testimonial";
import Image from "next/image";


export const metadata = {
  title: "Home: Work Manager",
};

export default function Home() {
  return (
    <div>
      <BannerSection/>
      <FeatureSection/>
      <ActionSection/>
      <TestimonialSection/>
      <ContactSection/>
    </div>
  )
}
