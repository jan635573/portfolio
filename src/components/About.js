
const About = () => {
  return (
    <section className="about">
      <div className="about-wrap">
        <h2>ABOUT ME</h2>
        <div className="about-me">
          <img src="https://placehold.co/300x400"/>
          <div className="about-txt">
            <h5>정의담</h5>
            <hr />
            <p>uidamj25@gmail.com · 010-6355-7328</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac dignissim metus. Etiam fermentum, tortor sed interdum tincidunt, mauris ligula semper sem, eu porta lacus turpis a justo. Proin maximus euismod leo, vitae ornare augue sodales non.</p>
          </div>
        </div>
        <div className="skills">
          <h3>SKILLS</h3>
          <div className="skills-icon">
            <img src="https://placehold.co/90"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;