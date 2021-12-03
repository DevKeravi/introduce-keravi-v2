import { Container, Row, Col, Image } from "react-bootstrap";
import styled from "styled-components";
import { CaretRightOutlined } from "@ant-design/icons";

const ContainerWrapper = styled(Container)`
  background-color: ghostwhite;
  border-radius: 10px 10px 10px 10px;
  :hover {
    transform: translateY(20px);
    transition-duration: 1s;
  }
  :not(:hover) {
    transform: transitionY(0px);
    transition-duration: 1s;
  }
`;

export interface ArchivingCardProp {
  titleIcon: any;
  title: string;
  url: string;
  mainDesc: string;
  subDesc: string[];
}

const ArchivingCard = (prop: ArchivingCardProp) => {
  return (
    <ContainerWrapper>
      <Row>
        <Col style={{ marginTop: "1.5rem", marginBottom: "1.5rem" }}>
          <div style={{ marginBottom: "1.5rem" }}>
            <Image
              style={{ maxWidth: "52px", maxHeight: "52px" }}
              src={prop.titleIcon}
              alt={prop.title}
            />
            <span style={{ fontSize: "1.2rem", marginLeft: "1rem" }}>
              <strong>{prop.title}</strong>
            </span>
          </div>
          <div style={{ marginBottom: "0.5rem" }}>
            <a
              href={prop.url}
              style={{
                color: "#ff6666",
              }}
              target="_blank"
              rel="noreferrer noopener"
            >
              새창으로 링크 이동
            </a>
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <strong>{prop.mainDesc}</strong> 입니다.
          </div>
          {prop.subDesc.map((desc: string, i: number) => (
            <div key={i} style={{ fontSize: "0.9rem", marginBottom: "0.5rem" }}>
              <CaretRightOutlined style={{ marginRight: "0.5rem" }} />
              {desc}
            </div>
          ))}
        </Col>
      </Row>
    </ContainerWrapper>
  );
};
export default ArchivingCard;
