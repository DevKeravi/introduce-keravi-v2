import { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import CardTitle from "./CardTitle";
export interface GameCardProp {
  title: string;
  imageUrl: string;
  desc: string;
  footer: string;
}
const GameCard = (prop: GameCardProp[]) => {
  var initvalue: GameCardProp[] = [
    { title: "", imageUrl: "", desc: "", footer: "" },
  ];
  const [arrProp, setArrProp] = useState(initvalue);
  useEffect(() => {
    var tempArr = [];
    for (var i = 0; i < Object.keys(prop).length; i++) {
      tempArr.push(prop[i]);
    }
    setArrProp(tempArr);
  }, [prop]);
  return (
    <>
      <CardTitle title="GAME PROJECTS " color="#ffe5a9" />
      <Row xs={1} md={2} style={{ marginBottom: "1rem" }}>
        {arrProp.map((v: GameCardProp, i: number) => (
          <Col key={i}>
            <Card
              style={{
                border: "none",
                marginBottom: "2rem",
                borderRadius: "10px 10px 10px 10px",
                boxShadow: "0px 0px 20px -15px black",
              }}
            >
              <Card.Img variant="top" src={v.imageUrl} />
              <Card.Body>
                <Card.Title>{v.title}</Card.Title>
                <Card.Text>{v.desc}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <a
                  style={{ color: "#355E87" }}
                  href={v.footer}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Youtube 소개영상으로 이동
                </a>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};
export default GameCard;
