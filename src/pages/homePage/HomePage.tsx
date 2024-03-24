import AboutSection from "./component/AboutSection";
import HeroSection from "./component/HeroSection";
import SkillSection from "./component/SkillSection";
import WorkEducation from "./component/WorkEducation";
import "./style.scss";

export const HomePage = () => {
  return (
    <div className="home_page">
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <WorkEducation />
    </div>
  );
};
