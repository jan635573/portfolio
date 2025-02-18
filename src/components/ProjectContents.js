import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectContents = () => {
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
    <div className="project-contents">
      <div className="container">
        <Slider {...settings} dotsClass="dot-custom">
        <div>
          <img src="https://placehold.co/560x500"/>
        </div>
        <div>
          <img src="https://placehold.co/560x500"/>
        </div>
        <div>
          <img src="https://placehold.co/560x500"/>
        </div>
        </Slider>
      </div>
      {/* <div className="project-img">
        <img src="https://placehold.co/560x500"/>
      </div> */}
      <div className="project-txt">
        <h5>프로젝트1</h5>
        <p>프로젝트 설명 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac dignissim metus. Etiam fermentum, tortor sed interdum tincidunt, mauris ligula semper sem, eu porta lacus turpis a justo. mauris ligula semper sem, eu porta lacus turpis a justo.</p>
        <div className="sub-wrap">
          <p><strong>제작 방식</strong></p>
          <div className="tool">
            <span>PhotoShop</span>
            <span>HTML5</span>
            <span>CSS</span>
          </div>
          <p><strong>레이아웃 제작 방식 : </strong><span>Flex 기반의 레이아웃</span></p>
          <p><strong>플러그인 : </strong><span>Web Font</span></p>
          <p><strong>작업 기여도 : </strong><span>100%(개인 프로젝트)</span></p>
          <p><strong>제작 기간 : </strong><span>2일</span></p>
        </div>
        <button>SITE VIEW</button>
      </div>
    </div>
  );
};

export default ProjectContents;