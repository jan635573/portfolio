const projectData = [
  {
    id: 1,
    name: '블로그형 웹 페이지 - 반응형 웹 구현',
    detail: '국립해양박물관 기존 사이트의 요소를 재구상하여 블로그형 형태로 UI/UX 디자인을 하고 HTML5와 CSS3를 활용하여 웹 표준을 준수한 웹 사이트를 개발하였습니다.\n사용자 편의성을 위해 반응형으로 제작되었으며 동적인 요소를 추가하기 위해 CSS 애니메이션을 적용하였습니다.',
    tools: ['Photoshop','Figma','HTML5','CSS3'],
    layout: 'Flex 기반의 레이아웃',
    plugin: 'Web Font',
    contribution: '100% (개인 프로젝트)',
    period: '2일',
    url: 'https://jan635573.github.io/mmk/index.html',
    img1: '/images/project/project1-1.jpg',
    img2: '/images/project/project1-2.jpg',
    img3: '/images/project/project1-3.jpg',
  },
  {
    id: 2,
    name: '금융 퀴즈 \n- 모바일 우선 개발, React 기반의 웹 구현',
    detail: '모바일 사용자의 편의성을 강조하여 모바일 중심의 UI/UX 디자인을 구상하고 React를 활용해 금융 퀴즈 웹 애플리케이션을 개발하였습니다.\n사용자는 원하는 주제를 선택하고 그에 맞는 퀴즈를 풀 수 있으며 그 과정에서 퀴즈 개수와 현재 점수를 확인하고 퀴즈가 끝난 후 최종 점수를 확인하는 기능을 이용할 수 있습니다.',
    tools: ['Figma', 'React'],
    layout: 'Flexbox 활용한 요소 정렬',
    plugin: 'Web Font',
    contribution: '100% (개인 프로젝트)',
    period: '1일',
    url: 'https://jan635573.github.io/quiz-project/',
    img1: '/images/project/project2-1.jpg',
    img2: '/images/project/project2-2.jpg',
    img3: '/images/project/project2-3.jpg',
  },
  {
    id: 3,
    name: '쇼핑몰 상품 주문 - Vue3 기반의 웹 구현',
    detail: '상품을 카테고리별로 정렬한 후 원하는 상품을 장바구니에 담고 주문까지 가능한 Vue3 기반의 웹 애플리케이션을 개발하였습니다.\n상품 수량 추가 및 상품을 주문하면 주문 완료 팝업창이 뜬 후 장바구니에 담겨 있던 상품이 삭제되는 기능을 이용할 수 있으며 모바일 사용자의 편의성을 위해 반응형 레이아웃을 적용하였습니다.',
    tools: ['vue3'],
    layout: 'Flexbox 활용한 요소 정렬',
    plugin: 'vue router',
    contribution: '100% (개인 프로젝트)',
    period: '1일',
    url: 'https://jan635573.github.io/product/#/',
    img1: '/images/project/project3-1.jpg',
    img2: '/images/project/project3-2.jpg',
    img3: '/images/project/project3-3.jpg',
  },
  {
    id: 4,
    name: 'Netflix Clone - React 기반의 웹 구현',
    detail: 'Netflix 메인 페이지의 주요 기능을 모방하여 React를 활용한 웹 애플리케이션을 개발하였습니다.\nUI/UX 구현 능력, 비동기 데이터 처리를 강조하였고 사용자 편의성을 위해 반응형으로 제작되었습니다.',
    tools: ['React', 'React Router', 'TMDB API 연동', 'SCSS'],
    layout: 'Flex 기반의 레이아웃',
    plugin: 'Axios, react-slick, scss',
    contribution: '100% (개인 프로젝트)',
    period: '2일',
    url: 'https://jan635573.github.io/netflix_clone/',
    img1: '/images/project/project4-1.jpg',
    img2: '/images/project/project4-2.jpg',
    img3: '/images/project/project4-3.jpg',
  },
  {
    id: 5,
    name: 'Momentum Clone \n- 로컬 스토리지 활용 개인 맞춤 웹 구현',
    detail: '일정 관리 프로그램인 Momentum의 주요 기능을 모방하여 로컬 스토리지 저장 기능을 활용한 웹 애플리케이션을 개발하였습니다.\n기존 프로그램에서 변화를 준 UI/UX 디자인을 구상한 후 웹 표준을 준수하여 구현하였고 사용자는 입력한 데이터를 로컬 스토리지에 저장할 수 있으며 테마 변경, 현재 날짜와 시간, 위치를 기반으로 한 날씨 정보, 랜덤으로 출력되는 명언 및 목표와 할 일 목록 기능을 이용할 수 있습니다.',
    tools: ['Figma', 'HTML5', 'CSS3', 'ES6', 'Weather API 연동', 'local storage'],
    layout: 'HTML5 기반의 레이아웃',
    plugin: 'Axios, Google Fonts',
    contribution: '100% (개인 프로젝트)',
    period: '2일',
    url: 'https://jan635573.github.io/momentum/index.html',
    img1: '/images/project/project5-1.jpg',
    img2: '/images/project/project5-2.jpg',
    img3: '/images/project/project5-3.jpg',
  },
  {
    id: 6,
    name: 'Airbnb Clone - 반응형 웹 구현',
    detail: '숙소 공유 사이트인 Airbnb의 레이아웃을 모방한 웹 사이트를 개발하였습니다.\n데스크탑 화면을 비롯하여 모바일 환경에서도 자주 이용되는 사이트 특성을 고려하여 사용자 편의성을 강조한 반응형 웹 디자인을 적용하였습니다.',
    tools: ['Figma', 'HTML5', 'CSS3', 'ES6'],
    layout: 'Flex 기반의 레이아웃',
    plugin: 'Font Awesome',
    contribution: '100% (개인 프로젝트)',
    period: '1일',
    url: 'https://jan635573.github.io/airbnb/index.html',
    img1: '/images/project/project6-1.jpg',
    img2: '/images/project/project6-2.jpg',
    img3: '/images/project/project6-3.jpg',
  },
  {
    id: 7,
    name: 'Tesla Clone - 웹 표준의 웹 페이지 구현',
    detail: 'Tesla 메인 페이지의 UI를 모방하여 웹 표준을 준수한 웹 사이트를 개발하였습니다.\n페이지 내에 자동 재생되는 영상을 첨부하였고 사용자 편의성을 위한 반응형 레이아웃을 적용하였습니다.',
    tools: ['Figma', 'HTML5', 'CSS3'],
    layout: 'HTML5 기반의 레이아웃',
    plugin: 'Google Fonts, Font Awesome',
    contribution: '100% (개인 프로젝트)',
    period: '2일',
    url: 'https://jan635573.github.io/tesla/index.html',
    img1: '/images/project/project7-1.jpg',
    img2: '/images/project/project7-2.jpg',
    img3: '/images/project/project7-3.jpg',
  },
  {
    id: 8,
    name: 'WAY 영양제 판매 사이트 - JSP 기반의 웹 구현',
    detail: 'WAY라는 이름의 가상 영양제 판매 사이트를 기획하고 JSP를 기반으로 웹 표준을 준수하여 개발하였습니다.\n쇼핑몰 형태의 웹 사이트로 장바구니, 주문, 주문 확인 등의 기본적인 기능과 함께 사용자 맞춤형 추천 기능도 구현하여 제작하였습니다.\n사용자 편의성을 위해 반응형으로 제작되었으며, 팀 프로젝트로 진행되어 기획, 사이트 전반의 디자인, 이미지 편집, 제작, 자료 조사 및 구성 등에 참여하였습니다.',
    tools: ['Photoshop', 'Adobe XD', 'JSP', 'HTML5', 'CSS3', 'ES6', 'MySQL', ' Swiper 라이브러리', 'kakaoPay 결제 API 연동'],
    layout: 'JSP, HTML5 기반의 레이아웃',
    plugin: 'Web Font',
    contribution: '32% (팀 프로젝트)',
    period: '4개월(2023년 제작)',
    url: 'https://drive.google.com/file/d/1snvsR6ixk8HazKRx91DMhRPzIErdv5X4/view?usp=sharing',
    img1: '/images/project/project8-1.jpg',
    img2: '/images/project/project8-2.jpg',
    img3: '/images/project/project8-3.jpg',
  },
];

export default projectData;