import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectContents = ({projectData}) => {

  var settings = {
    slide: 'img',
    dots: true,
    arrow: false,
    infinite: true,
    // centerMode: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="project-contents" key={projectData.id}>
      <div className="container">
        <Slider {...settings} dotsClass="dot-custom">
        <div>
          <img src={projectData.img1} alt={projectData.name}/>
        </div>
        <div>
          <img src={projectData.img2} alt={projectData.name}/>
        </div>
        <div>
          <img src={projectData.img3} alt={projectData.name}/>
        </div>
        </Slider>
      </div>
      <div className="project-txt">
        <div className="title-wrap">
          <h5>{projectData.name}</h5>
          <p>{projectData.detail}</p>
        </div>
        <div className="sub-wrap">
          <p><strong>사용 스킬</strong></p>
          <div className="tool">
            {
              projectData.tools.map((list,idx)=>{
                return <span key={idx}>{list}</span>
              })
            }
          </div>
          <p><strong>레이아웃 제작 방식 : </strong><span>{projectData.layout}</span></p>
          <p><strong>플러그인 : </strong><span>{projectData.plugin}</span></p>
          <p><strong>작업 기여도 : </strong><span>{projectData.contribution}</span></p>
          <p><strong>제작 기간 : </strong><span>{projectData.period}</span></p>
        </div>
        <button><a href={projectData.url} target="_blank">SITE VIEW</a></button>
      </div>
    </div>
  );
};

export default ProjectContents;