import Heading from "../../../component/heading/Heading";
import { developerSkills } from "../../../constants";

const SkillSection = () => {
  return (
    <div className="home_page-skills_section">
      <div className="container">
        <Heading
          title="my Skills"
          className="home_page-skills_section-heading"
        />
        <div className="home_page-skills_section-skills">
            {developerSkills?.map((skill)=>{
                return (
                  <div className="box" key={skill.name}>
                    <img src={skill.icon} alt={skill.name} />
                    <span>{skill.name}</span>
                  </div>
                );
            })}
        </div>
      </div>
    </div>
  );
}

export default SkillSection;
