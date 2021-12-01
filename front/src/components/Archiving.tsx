import CardTitle from "./CardTitle";
import { Container, Row, Col } from "react-bootstrap";
import ArchivingCard, { ArchivingCardProp } from "./ArchivingCard";
import { GithubOutlined } from "@ant-design/icons";

const cardProps: ArchivingCardProp[] = [
  {
    titleIcon: "/25231.png",
    title: "GitHub",
    mainDesc: "소스 코드 저장소",
    subDesc: [
      "진행했던 프로젝트와 앱들의 소스 코드",
      "각종 튜토리얼들을 연습한 기록",
      "보유한 서적들의 소스 코드",
    ],
    url: "https://github.com/DevKeravi",
  },
  {
    titleIcon: "/tistory-logo-fill.svg",
    title: "TISTORY",
    mainDesc: "공부 및 지식 공유 목적의 블로그",
    subDesc: [
      "각종 에러들의 해결법 기록",
      "프로젝트를 진행하며 느낀것들을 정리",
      "헷갈리는 설정이나, 사용법들을 정리",
    ],
    url: "https://keravi.tistory.com",
  },
];
const Archiving = () => {
  return (
    <Container style={{ paddingBottom: "7rem" }}>
      <Row>
        <Col>
          <CardTitle title="ARCHIVING" color="#ffe5a9" />
        </Col>
      </Row>
      <Row className="g-5">
        <Col lg={6} xs={12}>
          <ArchivingCard {...cardProps[0]} />
        </Col>
        <Col lg={6} xs={12}>
          <ArchivingCard {...cardProps[1]} />
        </Col>
      </Row>
    </Container>
  );
};
export default Archiving;
