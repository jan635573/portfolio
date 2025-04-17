import { forwardRef } from "react";
import skillsData from ".././data/skillsData";

const About = forwardRef((props, ref) => {
  return (
    <section className="about" ref={aboutRef => (ref.current[1] = aboutRef)}>
      <div className="about-wrap">
        <h2>ABOUT ME</h2>
        <div className="about-me">
          <img src={`${process.env.PUBLIC_URL}/images/about/aboutme.png`} alt="캐릭터 이미지"/>
          <div className="about-txt">
            <h5>정의담</h5>
            <hr />
            <p>uidamj25@gmail.com · 010-6355-7328</p>
            <p>안녕하세요. 언제나 성실하게, 최선을 다하여 웹 속에 저만의 세상을 만드는 것에 보람을 느끼는 웹 퍼블리셔 정의담입니다.<br />
            어릴 적부터 포토샵으로 무언가 만드는 걸 좋아하던 저는 웹 디자인과 관련된 일을 꿈꾸어 대학교에서 멀티미디어학과를 진학해 본격적으로 웹 퍼블리싱을 배웠고, 그 후로도 전공을 발전시키고자 웹 퍼블리셔 직업훈련을 수료하며 여전히 어엿한 웹 퍼블리셔라는 꿈을 안고 저의 창의성과 능력을 펼치고자 합니다.</p>
          </div>
        </div>
        <div className="skills">
          <h3>SKILLS</h3>
          <div className="skills-icon">
            {
              skillsData.map((list)=>{
                return <img key={list.id} src={`${process.env.PUBLIC_URL}${list.icon}`} alt={list.name}/>
              })
            }
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;