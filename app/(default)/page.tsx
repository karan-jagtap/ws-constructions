export const metadata = {
  title: "W.S. Constructions",
  description: "Engineers and Contractors",
};

import Hero from "@/components/hero";
import AboutUs from "@/components/about-us";
import OurBankers from "@/components/our-bankers";
import OurDesigners from "@/components/our-designers";
import OurToolsAndPlants from "@/components/our-tools-and-plants";
import Aim from "@/components/aim";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <OurBankers />
      <OurDesigners />
      <OurToolsAndPlants />
      <Aim />
    </>
  );
}
