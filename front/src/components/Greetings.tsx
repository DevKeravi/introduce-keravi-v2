import { Container, Row, Col, Image } from "react-bootstrap";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import CardTitle from "./CardTitle";
const Greetings = () => {
  return (
    <Container>
      <Row>
        <Col>
          <CardTitle title="CLOSING" color="#ff6666" />
        </Col>
      </Row>
      <Row style={{ marginBottom: "5rem" }}>
        <Col
          lg={6}
          xs={12}
          style={{ marginBottom: "2rem", textAlign: "center" }}
        >
          <Image src="/myPhoto.jpg" alt="채성렬" />
        </Col>
        <Col lg={6} xs={12}>
          <div style={{ textAlign: "center" }}>
            <p>
              <h5 style={{ lineHeight: "2.5rem" }}>
                SGA 부산에서 <strong>게임 그래픽 프로그래머</strong> 국비 과정을
                이수 한 후 웹이 주는 매력에 빠져 <strong>풀스택을 독학</strong>
                으로 시작 하였습니다. 빠르게 변하는 웹 트렌드에 맞춰 다양한
                시도를 해보고 있으며 좀 더 나은 유저 경험을 위해,
                <br /> 항상 고민하고 있습니다.
              </h5>
            </p>
            <p>
              <h5 style={{ lineHeight: "2.5rem" }}>
                프론트 업무가 주력이지만, 백엔드도 겸하면서 작업을 진행해와서,
                서로의 고충과 이해관계를 잘 수용할 수 있습니다. 현재는 개발에
                집중하고있지만, 기획에도 관심이 많아 아이디어를 실현 시키는 일도
                도전해보고 싶습니다.
              </h5>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Greetings;
