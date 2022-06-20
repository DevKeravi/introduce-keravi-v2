import { GameCardProp } from './GameCard';
import { ProjectsCardProps } from './ProjectsCard';

export const HazyShade: ProjectsCardProps = {
  title: 'Hazy shade of spring',
  subTitle: '디자인 수주를 받았다고 생각하고 만드는 화장품 쇼핑물',
  images: [
    { src: '/shade/main.png', alt: 'cosmetic-shop' },
    { src: '/shade/pList.png', alt: 'cosmetic-shop' },
    { src: '/shade/pMore.png', alt: 'cosmetic-shop' },
    { src: '/shade/sort.png', alt: 'cosmetic-shop' },
    { src: '/shade/detail.png', alt: 'cosmetic-shop' },
    { src: '/shade/order.png', alt: 'cosmetic-shop' },
    { src: '/shade/about.png', alt: 'cosmetic-shop' },
    { src: '/shade/contact.png', alt: 'cosmetic-shop' },
    { src: '/shade/mMain.png', alt: 'cosmetic-shop' },
    { src: '/shade/mPList.png', alt: 'cosmetic-shop' },
    { src: '/shade/mDetail.png', alt: 'cosmetic-shop' },
    { src: '/shade/mBasket.png', alt: 'cosmetic-shop' },
    { src: '/shade/mAbout.png', alt: 'cosmetic-shop' },
    { src: '/shade/mContact.png', alt: 'cosmetic-shop' },
  ],
  desc: [
    {
      value:
        '디자인 수주를 받았다고 가정하에 제작하는 가상의 화장품 쇼핑몰 입니다. ',
      bold: true,
    },
    {
      value:
        '항상 css 나 관련 라이브러리들의 숙련도가 모자라다고 생각했고, 실제 실무에서는 디자인을 받아서 구현하는 일이 상당 수 발생할 것 같아 진행한 프로젝트 입니다. 이 프로젝트를 통해 본인의 디자인 적인 숙련도를 올리고자 함이 목표였던 것 같습니다.',
    },
    { nextLine: true },
    { value: '그리드와 반응형 웹의 설계', color: 'red' },
    {
      value:
        '에 관해 많이 배울 수 있었던 프로젝트입니다. 실제 구해온 디자인 시안에는 모바일과 데스크탑 두가지가 있었으며, 해상도 변화에 따른 그리드 설계 및 각종 컴포넌트들의 변화에 집중 하였으며, 최종적으로는 태블릿과 모바일, 데스크탑까지 매끄럽게 대응 할 수 있게 되었습니다.',
    },
    { nextLine: true },
    { value: '부트스트랩의 커스터마이즈', color: 'red' },
    {
      value:
        '를 적극적으로 활용하게 되었는데, 일전 튜토리얼단계의 작업물들은 Document에 적힌 코드 위주로 작업하였지만, 이번에는 부트스트랩 공부를 많이하여 부트스트랩으로 생산성을 올리지만 부트스트랩 같지 않은, 그런 웹을 만들 수 있었습니다.',
    },
    { nextLine: true },
    { value: 'Next.js 와 Redux를 이용하여 ' },
    { value: '다이나믹 라우팅, SSR, 상태관리', color: 'red' },
    {
      value:
        '를 하였으며, 특히 쇼핑몰이라는 특성에 맞춰 SSR을 통해 SEO를 많이 개선하였습니다. webpack-bundle-analyzer 와 light-house 를 통해 웹의 분석 및 개선에 신경을 많이 썼습니다.',
    },
  ],
  info: [
    {
      subject: '주요 기능',
      desc: 'Makeup-API 를 이용한 실제 상품 정보 출력, Next Api와 Redux, Cookie를 이용한 로그인, 모든 기기에 대응할 수 있는 반응형 웹, styled-components 를 이용한 스타일링',
    },
    {
      subject: '소스 코드',
      desc: '클릭 시 깃 허브로 이동합니다.',
      isLink: true,
      url: 'https://github.com/DevKeravi/next-cosmetic-shop',
    },
    {
      subject: '소개 영상',
      desc: '클릭시 유튜브로 이동합니다.',
      isLink: true,
      url: 'https://www.youtube.com/watch?v=9Tr7zhpaOvU&t=65s',
    },
    {
      subject: 'Front-end',
      desc: 'Next.js, React, Redux, TypeScript, Bootstrap, Styled-Components, Webpack-bundle-analyzer, Light-house',
    },
    {
      subject: 'API',
      desc: 'Makeup-API ( Public )',
      isLink: true,
      url: 'https://makeup-api.herokuapp.com/',
    },
    {
      subject: '실 제작기간',
      desc: '10일',
    },
    {
      subject: '제작 인원',
      desc: 'Dev.Keravi ( 1인 )',
    },
  ],
};
export const CouponZ: ProjectsCardProps = {
  title: 'CouponZ',
  subTitle: '보유한 쿠폰들을 관리하고, 거래 및 선물하는 웹 ( 개발중 )',
  images: [{ src: '/progress.jpeg', alt: 'work progress' }],
  desc: [
    {
      value: '쿠폰들을 관리할 수 있는 웹 사이트 입니다. ',
      bold: true,
    },
    {
      value:
        '블록체인에 관심이 많을 때, 쿠폰들을 통합하는 블록체인을 본 것에서 이 아이디어가 시작됬습니다. 쿠폰 통합 보관은 물론, 사용하지 않는 쿠폰이나, 기간이 얼마남지 못해 쓰지 못하는 쿠폰들을 거래하고, 간단하게 선물할 수 있는 웹어플리케이션을 제작하는 목표를 가지고 개발을 시작하였습니다.',
    },
    { nextLine: true },
    { value: '개발 중 ', color: 'red' },
    {
      value:
        '인 포트폴리오로써 12월 중순 마감을 예정으로 작업하고 있습니다. Next.js를 이용한 Front-end, Golang을 이용한 Back-end가 기반 기술이며, AWS에 배포하여, 실제 도메인으로 만나 보실수 있으실 겁니다.',
    },
  ],
  info: [
    {
      subject: '주요 기능',
      desc: '내 쿠폰 저장, 친구에게 쿠폰 선물하기, 쿠폰 구매 및 판매, 쿠폰 나눔',
    },
    {
      subject: '소스 코드',
      desc: '아직 작업중 입니다.',
    },
    {
      subject: 'Front-end',
      desc: 'Next.js, React, Redux, TypeScript, Antd, Styled-Components, Webpack-bundle-analyzer, Light-house',
    },
    {
      subject: 'Back-end',
      desc: 'Golang Gin, MongoDB, NginX',
    },
    {
      subject: 'Deploy',
      desc: 'AWS (EC2,Route53)',
    },
    {
      subject: '실 제작기간',
      desc: '개발 중인 프로젝트입니다.',
    },
    {
      subject: '제작 인원',
      desc: 'Dev.Keravi ( 1인 )',
    },
  ],
};
export const GoBird: ProjectsCardProps = {
  title: 'Go Bird',
  subTitle: '트위터의 핵심기능을 구현한 클론 웹사이트',
  images: [{ src: '/gobird/gobird.png', alt: 'cosmetic-shop' }],
  desc: [
    {
      value: '트위터의 핵심기능을 풀스택으로 구현한 클론 웹사이트입니다. ',
      bold: true,
    },
    {
      value:
        '소셜 미디어의 선두 주자인 트위터의 클론 코딩을 해보자라는 생각으로, 강의들으며 제작한 웹페이지 입니다. 당시 실무적인 설계나, 코드의 일관성적인 측면이 모자라다고 인식하여, 강의를 듣게 되었습니다. 쓰인 기술들은 기존에 이미 한번씩 사용해본 기술 이었으나, 조금더 구체적인 설계와 쓰임새를 알게 되어 매우 좋은 경험이었다고 생각합니다.',
    },
    { nextLine: true },
    { value: 'Next.js 와 Express 기반의 풀스택', color: 'red' },
    {
      value:
        '을 잘 알게 되어 좋았는데, 기존에 사용하던 Golang 서버와 MongoDB를 떠나, ',
    },
    { value: 'Node Express, MySql', bold: true },
    { value: ' 를 체계적으로 사용해보는 기회가 되었습니다.' },
    { nextLine: true },
    { value: 'AWS의 서비스', color: 'red' },
    {
      value: '들을 이용해보았는데, ',
    },
    { value: 'EC2, S3', bold: true },
    {
      value:
        '를 사용한 배포는 클라우드 서비스를 많이 이용하는 요즘 배포환경에 있어, 많은 도움이 되었고 그 중 ',
    },
    { value: 'Lambda', bold: true },
    {
      value:
        '로 S3 이미지를 썸네일과 원본으로 포팅하는 기능, 도메인 연결과 CORS 문제 , NginX를 이용한 Https 서비스 등 실제 필요한 기술을 많이 공부하였습니다.',
    },

    { nextLine: true },
    { value: '마지막으로, ' },
    { value: 'Ant-Design', color: 'red' },
    { value: '을 사용해본 기회가 되었고,  ' },
    { value: '인피니트 스크롤', bold: true },
    { value: '과 같은 기술도 접목해 볼 수 있었습니다.' },
  ],
  info: [
    {
      subject: '주요 기능',
      desc: '트윗 및 이미지 업로드, 해쉬태그를 이용한 검색, 리트윗 기능, 좋아요 및 댓글 기능, 게시글의 삭제 및 수정, 팔로워 팔로우 기능, 내 게시글 조회',
    },
    {
      subject: '소스 코드',
      desc: '클릭 시 깃 허브로 이동합니다.',
      isLink: true,
      url: 'https://github.com/DevKeravi/GoBird',
    },
    {
      subject: 'Front-end',
      desc: 'Next.js, React, Redux, Redux-Saga, Antd, Styled-Components, Webpack-bundle-analyzer, Light-house',
    },
    {
      subject: 'Back-end',
      desc: 'Node.js, Express, MySql, NginX, AWS S3',
    },
    {
      subject: 'Deploy',
      desc: 'AWS (EC2, Route 53)',
    },
    {
      subject: '실 제작기간',
      desc: '13일',
    },
    {
      subject: '제작 인원',
      desc: 'Dev.Keravi ( 1인 )',
    },
  ],
};
export const IntroduceOne: ProjectsCardProps = {
  title: 'Introduce Keravi v1',
  subTitle: '개인 포트폴리오 사이트 버전 1',
  images: [
    { src: '/introduceOne/main.png', alt: 'IntroduceOne' },
    { src: '/introduceOne/skills.png', alt: 'IntroduceOne' },
    { src: '/introduceOne/portfolio.png', alt: 'IntroduceOne' },
    { src: '/introduceOne/contact.png', alt: 'IntroduceOne' },
  ],
  desc: [
    {
      value: '저를 소개하는 포트폴리오 사이트',
      bold: true,
    },
    {
      value:
        '입니다. 웹개발자로써의 저를 알리고, 제 작업물을 기록하기 위해 제작 하였으며, 리소스들을 하나하나 정성스레 모아, 실제로 도메인에 올려진 첫 웹사이트입니다.',
    },
    { nextLine: true },
    {
      value:
        '순수한 React로 제작되어있으며, AWS EC2와 Route53 을 이용하여 배포하였습니다. 차후 개선 요지가 많이 느껴져서 제작한 것이 지금 보시는 이 포트폴리오 사이트입니다.',
    },
    { nextLine: true },
    { value: '타입스크립트', bold: true },
    {
      value:
        '를 이용한 첫프로젝트 이며, 이 프로젝트 이후 작업물 부터는 모두 타입스크립트를 이용하고있습니다.',
    },
  ],
  info: [
    {
      subject: '주요 기능',
      desc: '간단한 자기소개, 인적 사항, 보유 기술 스택, GitHub/티스토리 링크, 포트폴리오 결과물 소개 및 링크',
    },
    {
      subject: '소스 코드',
      desc: '클릭 시 깃 허브로 이동합니다.',
      isLink: true,
      url: 'https://github.com/DevKeravi/introduce-keravi',
    },
    {
      subject: 'Front-end',
      desc: 'React, TypeScript, Bootstrap',
    },
    {
      subject: 'Deploy',
      desc: 'AWS (EC2,Route53)',
    },
    {
      subject: '실 제작기간',
      desc: '2일',
    },
    {
      subject: '제작 인원',
      desc: 'Dev.Keravi ( 1인 )',
    },
  ],
};
export const SimpleChat: ProjectsCardProps = {
  title: 'Simple Chat',
  subTitle: 'WebSocket을 이용한 간단한 채팅',
  images: [
    { src: '/chat/chat.png', alt: 'Chat' },
    { src: '/chat/choose.png', alt: 'Chat' },
    { src: '/chat/login.png', alt: 'Chat' },
    { src: '/chat/mongo.png', alt: 'Chat' },
  ],
  desc: [
    {
      value: 'WebSocket을 이용한 ',
      bold: true,
    },
    {
      value: '간단한 채팅 웹입니다. ',
    },
    { value: 'Golang Gin', bold: true },
    {
      value:
        '을 이용한 서버로 구축되어있으며 서버에서 바로 html을 Serve 하는 형태로 제작되어있습니다.',
    },
    { nextLine: true },
    { value: 'oAuth2를 이용하여 ', color: 'red' },
    {
      value:
        '구글 로그인을 지원하며, 토큰을 이용하여 해당 유저의 아바타를 가져와서 사용하고 있습니다. 또한 oAuth2를 이용하기 위해 인증서 기반의 Https 를 구현하였습니다.',
    },
    { nextLine: true },
    {
      value:
        'MongoDB를 이용하여, 로그를 기록하며 웹에 접속하였을때 채팅 로그를 불러오는 기능을 하게 만들어져있습니다.',
    },
  ],
  info: [
    {
      subject: '주요 기능',
      desc: '구글 계정으로 로그인, 웹소켓 기반의 채팅, 채팅 로그, 채팅 유저 구글 아바타',
    },
    {
      subject: '소스 코드',
      desc: '클릭 시 깃 허브로 이동합니다.',
      isLink: true,
      url: 'https://github.com/DevKeravi/chatApp',
    },
    {
      subject: 'Front-end',
      desc: 'React, Bootstrap',
    },
    {
      subject: 'Back-end',
      desc: 'Golang-Gin, WebSocket',
    },
    {
      subject: '실 제작기간',
      desc: '2일',
    },
    {
      subject: '제작 인원',
      desc: 'Dev.Keravi ( 1인 )',
    },
  ],
};
export const IntroduceTwo: ProjectsCardProps = {
  title: 'Introduce Keravi v2',
  subTitle: '개인 포트폴리오 사이트 버전 2',
  images: [{ src: '/introduceTwo/main.png', alt: 'IntroduceTwo' }],
  desc: [
    {
      value: '현재 보시고 계신 사이트',
      bold: true,
    },
    {
      value:
        '입니다. 버전 1의 단순한 디자인을 넘어, 새로운 디자인 요소들을 추가하고 간단한 인터렉션과 더 유연한 반응형 지원이 가능하게 제작되었습니다. ',
    },
    { nextLine: true },
    { value: '그라데이션과 SVG를 이용한 Div ', color: 'red' },
    {
      value:
        '를 접목하였으며, Skills 나 Archiving 카드에 간단한 애니메이션를 넣어주어 조금 더 웹이 반응하고 있구나라는 느낌을 주었습니다. 상단의 네비게이션 바도, 최상단에선 배경과 어우러지게 통일감을 주었습니다.',
    },
    { nextLine: true },
    {
      value:
        '여러장의 포트폴리오의 이미지를 필요시 모달로 확대 해볼 수 있는 편의를 제공하도록 하였고, ',
      bold: true,
    },
    {
      value:
        '조금 더 디자인 적으로 어울리는 색조합을 찾기 위해 노력하였습니다.',
    },

    { nextLine: true },
    {
      value: '저를 알려야되는 웹페이지의 특성상 Next.js 를 이용하여 ',
    },
    {
      value: 'SEO',
      color: 'blue',
    },
    {
      value: '를 신경써서 제작하였습니다.',
    },
  ],
  info: [
    {
      subject: '주요 기능',
      desc: '간단한 자기소개, 인적 사항, 보유 기술 스택, GitHub/티스토리 링크, 포트폴리오 결과물 소개 및 링크',
    },
    {
      subject: '소스 코드',
      desc: '클릭 시 깃 허브로 이동합니다.',
      isLink: true,
      url: 'https://github.com/DevKeravi/introduce-keravi-v2',
    },
    {
      subject: 'Front-end',
      desc: 'React, Next.js, TypeScript, Bootstrap',
    },
    {
      subject: 'Deploy',
      desc: 'AWS (EC2,Route53)',
    },
    {
      subject: '실 제작기간',
      desc: '3일',
    },
    {
      subject: '제작 인원',
      desc: 'Dev.Keravi ( 1인 )',
    },
  ],
};

export const GameCardProps: GameCardProp[] = [
  {
    title: '별의 커비 ( C++ )',
    imageUrl: '/game/kirby.png',
    desc: 'Window API 를 이용하여 만든 별의 커비 모작입니다. 작업기간은 12일 소요되었으며 1인 작업물 입니다.',
    footer: 'https://www.youtube.com/watch?v=nL6MzJg9ZfQ',
  },
  {
    title: '슬레이 더 스파이어 ( C++ )',
    imageUrl: '/game/slay.jpg',
    desc: 'Cocos2dx 를 이용하여 만든 Slay the Spire 모작입니다. 작업기간은 7일 소요되었으며 3인 팀으로 제작되었습니다. ( 우수포트폴리오 수상작 )',
    footer: 'https://www.youtube.com/watch?v=dfBMEfIsmc8&t=1s',
  },
  {
    title: '몬스터 헌터 ( C++ )',
    imageUrl: '/game/monster.jpg',
    desc: 'DirectX 를 이용하여 만든 몬스터 헌터 모작입니다. 작업기간은 21일 소요되었으며 3인 팀으로 제작되었습니다.',
    footer: 'https://www.youtube.com/watch?v=PfDJAFqLdfs',
  },
  {
    title: '포탈 ( C# )',
    imageUrl: '/game/portal.jpg',
    desc: 'Unity Engine 를 이용하여 만든 포탈 모작입니다. 작업기간은 한달 소요되었으며 2인 팀으로 제작되었습니다.',
    footer: 'https://www.youtube.com/watch?v=IAM2nbftdw0&t=1s',
  },
];
