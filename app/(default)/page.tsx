import Hero from "@/components/hero";
import AboutUs from "@/components/about-us";
import OurBankers from "@/components/our-bankers";
import OurDesigners from "@/components/our-designers";
import OurToolsAndPlants from "@/components/our-tools-and-plants";
import Aim from "@/components/aim";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "W.S. Constructions",
  description:
    "Established in 1991, W.S. Constructions has been recognized for unwavering quality and reliability in the construction industry. The inception of our journey unfolded when Mr. Hemant Kasbekar (B. E. Civil) and Mr. Deelip Kasbekar (D.C.E.) united their expertise, giving rise to the visionary concept of a joint business venture.",
};

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
