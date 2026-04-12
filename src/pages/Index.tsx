import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import MissionFeature from "@/components/MissionFeature";
import LatestNews from "@/components/LatestNews";
import SocialFeed from "@/components/SocialFeed";
import Partners from "@/components/Partners";
import Disclosure from "@/components/Disclosure";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <MissionFeature />
      <LatestNews />
      <SocialFeed />
      <Partners />
      <Disclosure />
      <Footer />
    </div>
  );
};

export default Index;
