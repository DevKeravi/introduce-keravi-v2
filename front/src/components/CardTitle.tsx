import { Col, Row } from "react-bootstrap";
import { AntDesignOutlined } from "@ant-design/icons";
export interface TitleProps {
  title: string;
  color?: string;
  lineColor?: string;
}
const CardTitle = ({
  title,
  color = "#528c84",
  lineColor = "grey",
}: TitleProps) => {
  return (
    <Row
      style={{ textAlign: "center", marginTop: "5rem", marginBottom: "5rem" }}
    >
      <Col>
        <div
          style={{
            display: "inline-block",
            borderBottom: "1px solid",
            borderBottomColor: `${lineColor}`,
          }}
        >
          <h1
            className="display-3"
            style={{ fontWeight: "bold", color: `${color}` }}
          >
            {title}
          </h1>
        </div>
      </Col>
    </Row>
  );
};
export default CardTitle;
