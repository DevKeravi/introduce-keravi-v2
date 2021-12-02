import { useState } from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container style={{ padding: "3rem" }}>
      <Row style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Col>
          <a
            href={"https://github.com/DevKeravi"}
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image
              src="/git-hub.png"
              alt="github"
              style={{ marginRight: "1rem", width: "80px", height: "80px" }}
            />
          </a>
          <a
            href={"https://keravi.tistory.com/"}
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image
              src="/tistory-logo-fill.svg"
              alt="github"
              style={{ marginLeft: "1rem", width: "80px", height: "80px" }}
            />
          </a>
        </Col>
      </Row>
      <Row style={{ textAlign: "center", fontSize: "1.2rem" }}>
        <Col>&copy; 2021. Keravi. All rights reserverd.</Col>
      </Row>
    </Container>
  );
};
export default Footer;
