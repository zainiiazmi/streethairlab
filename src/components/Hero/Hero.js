import Image from "next/image";
import Barber from "../../../public/img/barber1.jpg";
import { HeroBg, HeroContent, HeroH1, HeroP, HeroSection, HeroSpan } from "./HeroStyles";

const Hero = () => {
  return (
    <HeroSection>
      <HeroBg>
        <Image src={Barber} alt="hero-bg" layout="fill" objectFit="cover" objectPosition="center" priority />
      </HeroBg>
      <HeroContent>
        <HeroH1>Streethairlab</HeroH1>
        <HeroP id="services">
          Your <HeroSpan>Personal</HeroSpan> Hair Stylist
        </HeroP>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
