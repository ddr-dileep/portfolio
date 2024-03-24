import { ASSETS } from "../../../assets/assets";
import { Button } from "../../../component";
import Heading from "../../../component/heading/Heading";
import { developerDetails } from "../../../constants";

const AboutSection = () => {
  return (
    <div className="home_page-about_section">
      <Heading title="About me" className="home_page-about_section-heading" />
      <div className="container home_page-about_section-container">
        <div className="home_page-about_section-left">
          <div className="home_page-about_section-left-image">
            <img src={ASSETS.dileepImage} />
          </div>
        </div>
        <div className="home_page-about_section-right">
          <div className="home_page-about_section-right-box">
            <h3>{developerDetails.name}</h3>
            <p>{developerDetails.about1}</p>
            <p>{developerDetails.about2}</p>
            <p>{developerDetails.about3}</p>
            <p>
              <b>Skills</b>:- {developerDetails.devSkills.join(", ").toString()}
            </p>
            <Button
              onClick={() => {}}
              className="home_page-about_section-right-box-button"
              title="More..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
