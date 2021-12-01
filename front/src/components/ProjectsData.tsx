import { ProjectsCardProps } from "./ProjectsCard";

export const HazyShade: ProjectsCardProps = {
  title: "Hazy shade of spring",
  subTitle: "디자인 수주를 받았다고 생각하고 만드는 화장품 쇼핑물",
  images: [
    { src: "/shade/main.png", alt: "cosmetic-shop" },
    { src: "/shade/mMain.png", alt: "cosmetic-shop" },
    { src: "/shade/pList.png", alt: "cosmetic-shop" },
    { src: "/shade/mPList.png", alt: "cosmetic-shop" },
    { src: "/shade/detail.png", alt: "cosmetic-shop" },
    { src: "/shade/mDetail.png", alt: "cosmetic-shop" },
    { src: "/shade/order.png", alt: "cosmetic-shop" },
    { src: "/shade/mBasket.png", alt: "cosmetic-shop" },
    { src: "/shade/about.png", alt: "cosmetic-shop" },
    { src: "/shade/mAbout.png", alt: "cosmetic-shop" },
    { src: "/shade/contact.png", alt: "cosmetic-shop" },
    { src: "/shade/mContact.png", alt: "cosmetic-shop" },
    { src: "/shade/pMore.png", alt: "cosmetic-shop" },
    { src: "/shade/sort.png", alt: "cosmetic-shop" },
  ],
  desc: [
    {
      value:
        "디자인 수주를 받았다고 가정하에 제작하는 가상의 화장품 쇼핑몰 입니다. ",
      bold: true,
    },
    {
      value:
        "항상 css 나 관련 라이브러리들의 숙련도가 모자라다고 생각했고, 실제 실무에서는 디자인을 받아서 구현하는 일이 상당 수 발생할 것 같아 진행한 프로젝트 입니다. 이 프로젝트를 통해 본인의 디자인 적인 숙련도를 올리고자 함이 목표였던 것 같습니다.",
    },
    { nextLine: true },
    { value: "그리드와 반응형 웹의 설계", color: "red" },
    {
      value:
        "에 관해 많이 배울 수 있었던 프로젝트입니다. 실제 구해온 디자인 시안에는 모바일과 데스크탑 두가지가 있었으며, 해상도 변화에 따른 그리드 설계 및 각종 컴포넌트들의 변화에 집중 하였으며, 최종적으로는 태블릿과 모바일, 데스크탑까지 매끄럽게 대응 할 수 있게 되었습니다.",
    },
    { nextLine: true },
    { value: "부트스트랩의 커스터마이즈", color: "red" },
    {
      value:
        "를 적극적으로 활용하게 되었는데, 일전 튜토리얼단계의 작업물들은 Document에 적힌 코드 위주로 작업하였지만, 이번에는 부트스트랩 공부를 많이하여 부트스트랩으로 생산성을 올리지만 부트스트랩 같지 않은, 그런 웹을 만들 수 있었습니다.",
    },
    { nextLine: true },
    { value: "Next.js 와 Redux를 이용하여 " },
    { value: "다이나믹 라우팅, SSR, 상태관리", color: "red" },
    {
      value:
        "를 하였으며 webpack-bundle-analyzer 와 light-house 를 통해 웹의 분석 및 개선에 신경을 많이 썼습니다.",
    },
  ],
  info: [
    {
      subject: "주요 기능",
      desc: "Makeup-API 를 이용한 실제 상품 정보 출력, Next Api와 Redux, Cookie를 이용한 로그인, 모든 기기에 대응할 수 있는 반응형 웹, styled-components 를 이용한 스타일링",
    },
    {
      subject: "소스 코드",
      desc: "클릭 시 깃 허브로 이동합니다.",
      isLink: true,
      url: "https://github.com/DevKeravi/next-cosmetic-shop",
    },
    {
      subject: "소개 영상",
      desc: "클릭시 유튜브로 이동합니다.",
      isLink: true,
      url: "https://github.com/DevKeravi/next-cosmetic-shop",
    },
    {
      subject: "Front-end",
      desc: "Next.js, React, Redux, TypeScript, Styled-Components, Webpack-bundle-analyzer, Light-house",
    },
    {
      subject: "API",
      desc: "Makeup-API ( Public )",
      isLink: true,
      url: "https://makeup-api.herokuapp.com/",
    },
    {
      subject: "실 제작기간",
      desc: "10일",
    },
    {
      subject: "제작 인원",
      desc: "Dev.Keravi ( 1인 )",
    },
  ],
};
export const CouponZ: ProjectsCardProps = {
  title: "CouponZ",
  subTitle: "보유한 쿠폰들을 관리하고, 거래 및 선물하는 웹 ( 개발중 )",
  images: [{ src: "/progress.jpeg", alt: "work progress" }],
  desc: [
    {
      value: "쿠폰들을 관리할 수 있는 웹 사이트 입니다. ",
      bold: true,
    },
    {
      value:
        "블록체인에 관심이 많을 때, 쿠폰들을 통합하는 블록체인을 본 것에서 이 아이디어가 시작됬습니다. 사용하지 않는 쿠폰이나, 기간이 얼마남지 못해 쓰지 못하는 쿠폰들을 거래하고, 간단하게 선물할 수 있는 웹어플리케이션을 제작하는 목표를 가지고 개발을 시작하였습니다.",
    },
    { nextLine: true },
    { value: "풀스택으", color: "red" },
    {
      value:
        "에 관해 많이 배울 수 있었던 프로젝트입니다. 실제 구해온 디자인 시안에는 모바일과 데스크탑 두가지가 있었으며, 해상도 변화에 따른 그리드 설계 및 각종 컴포넌트들의 변화에 집중 하였으며, 최종적으로는 태블릿과 모바일, 데스크탑까지 매끄럽게 대응 할 수 있게 되었습니다.",
    },
    { nextLine: true },
    { value: "부트스트랩의 커스터마이즈", color: "red" },
    {
      value:
        "를 적극적으로 활용하게 되었는데, 일전 튜토리얼단계의 작업물들은 Document에 적힌 코드 위주로 작업하였지만, 이번에는 부트스트랩 공부를 많이하여 부트스트랩으로 생산성을 올리지만 부트스트랩 같지 않은, 그런 웹을 만들 수 있었습니다.",
    },
    { nextLine: true },
    { value: "Next.js 와 Redux를 이용하여 " },
    { value: "다이나믹 라우팅, SSR, 상태관리", color: "red" },
    {
      value:
        "를 하였으며 webpack-bundle-analyzer 와 light-house 를 통해 웹의 분석 및 개선에 신경을 많이 썼습니다.",
    },
  ],
  info: [
    {
      subject: "주요 기능",
      desc: "Makeup-API 를 이용한 실제 상품 정보 출력, Next Api와 Redux, Cookie를 이용한 로그인, 모든 기기에 대응할 수 있는 반응형 웹, styled-components 를 이용한 스타일링",
    },
    {
      subject: "소스 코드",
      desc: "클릭 시 깃 허브로 이동합니다.",
      isLink: true,
      url: "https://github.com/DevKeravi/next-cosmetic-shop",
    },
    {
      subject: "소개 영상",
      desc: "클릭시 유튜브로 이동합니다.",
      isLink: true,
      url: "https://github.com/DevKeravi/next-cosmetic-shop",
    },
    {
      subject: "Front-end",
      desc: "Next.js, React, Redux, TypeScript, Styled-Components, Webpack-bundle-analyzer, Light-house",
    },
    {
      subject: "API",
      desc: "Makeup-API ( Public )",
      isLink: true,
      url: "https://makeup-api.herokuapp.com/",
    },
    {
      subject: "실 제작기간",
      desc: "10일",
    },
    {
      subject: "제작 인원",
      desc: "Dev.Keravi ( 1인 )",
    },
  ],
};
