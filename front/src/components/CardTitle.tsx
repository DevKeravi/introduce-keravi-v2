import { Col, Row } from "react-bootstrap";
import { AntDesignOutlined } from "@ant-design/icons";
export interface TitleProps {
  title: string;
}
const CardTitle = ({ title }: TitleProps) => {
  return (
    <Row
      style={{ textAlign: "center", marginTop: "3rem", marginBottom: "3rem" }}
    >
      <Col>
        <div
          style={{
            display: "inline-block",
            borderBottom: "1px solid",
            borderBottomColor: "grey",
          }}
        >
          <h1
            className="display-3"
            style={{ fontWeight: "bold", color: "#528c84" }}
          >
            {title}
          </h1>
        </div>
      </Col>
    </Row>
  );
};
export default CardTitle;
