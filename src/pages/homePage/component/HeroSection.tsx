import { ASSETS } from "../../../assets/assets"
import { Button, TextTypeAnimation } from "../../../component"
import { devSkills } from "../../../constants"


const HeroSection = () => {
  return (
    <div className="home_page-background">
      <div className=" home_page-hero_section container">
        <div className="home_page-hero_section-left">
          <span className="home_page-hero_section-left-hi_icon">
            Hello{ASSETS.hi},
          </span>
          <span className="home_page-hero_section-left-dev_name_spn">
            I'm{" "}
            <span className="home_page-hero_section-left-dev_name">
              {ASSETS.displayName}
            </span>.
          </span>
          <TextTypeAnimation
            sequence={devSkills}
            className="home_page-hero_section-left-text-animation"
          />
          <div className="home_page-hero_section-left-buttons">
            <Button onClick={() => {}} title="About me" />
            <Button onClick={() => {}} title="Hire me" />
          </div>
        </div>
        <div className="home_page-hero_section-right">
          <div className="home_page-hero_section-right-image_box">
            <img src={ASSETS.dileep} alt="dileep raloti" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection
