import Heading from "../../../component/heading/Heading";
import { workAndEducation } from "../../../constants";

const WorkEducation = () => {
  return (
    <div className="home_page-work_education">
      <div className="container">
        <Heading
          title="Work & Education"
          className="home_page-work_education-heading"
        />
        <div className="home_page-work_education-section">
          {
            workAndEducation?.map((item)=>{
              return (
                <div className="box" key={item.session}>
                  <h3 className="box-title">
                    {item.name} -{" "}
                    <a target="_blank" href={item.organizationLink}>
                      ({item.organizationName})
                    </a>
                  </h3>
                  <p>
                    SESSION : <span>{item.session}</span>
                  </p>
                  <p>
                    SKILLS : {item.skills}
                  </p>
                </div>
              );
            })
          }
          
        </div>
      </div>
    </div>
  );
};

export default WorkEducation;
