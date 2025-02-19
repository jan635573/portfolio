import { forwardRef } from "react";
import skillsData from ".././data/skillsData";

const About = forwardRef((props, ref) => {
  return (
    <section className="about" ref={aboutRef => (ref.current[1] = aboutRef)}>
      <div className="about-wrap">
        <h2>ABOUT ME</h2>
        <div className="about-me">
          <img src="./images/about/aboutme.png"/>
          <div className="about-txt">
            <h5>정의담</h5>
            <hr />
            <p>uidamj25@gmail.com · 010-6355-7328</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac dignissim metus. Etiam fermentum, tortor sed interdum tincidunt, mauris ligula semper sem, eu porta lacus turpis a justo. Proin maximus euismod leo, vitae ornare augue sodales non.</p>
            {/* <p className="introduce">안녕하세요. 언제나 성실하게, 할 수 있는 최선을 다하고자 노력하는 정의담입니다. </p> */}
          </div>
        </div>
        <div className="skills">
          <h3>SKILLS</h3>
          <div className="skills-icon">
            {
              skillsData.map((list)=>{
                return <img key={list.id} src={list.icon} alt={list.name}/>
              })
            }
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;