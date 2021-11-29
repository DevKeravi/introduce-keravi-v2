import { Col, Row, Container } from "react-bootstrap";
import styled from "styled-components";

export interface AboutCardProps {
  icon: any;
  title: string;
  desc: string;
}

const IconWrapper = styled.span`
  font-size: 4rem;
  svg {
    margin-bottom: 24px;
  }
`;
const AboutCard = (props: AboutCardProps) => {
  return (
    <>
      <div style={{ display: "inline-block", marginLeft: "3rem" }}>
        <IconWrapper>{props.icon}</IconWrapper>
      </div>
      <div style={{ display: "inline-block", marginLeft: "2rem" }}>
        <div style={{ fontSize: "1.3rem" }}>{props.title}</div>
        <div style={{ fontSize: "1rem" }}>{props.desc}</div>
      </div>
    </>
  );
};
export default AboutCard;
