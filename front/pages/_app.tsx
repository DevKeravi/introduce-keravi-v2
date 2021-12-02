import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import Gnb from "../src/components/Gnb";
import Footer from "../src/components/Footer";
import "../styles/globals.css";
import FooterCarousel from "../src/components/FooterCarousel";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const desc = "프론트엔드 개발자 채성렬의 포트폴리오입니다.";
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Keravi Portfolio</title>
        <meta name="description" content={desc} />
        <meta property="og:title" content="채성렬의 포트폴리오" />

        <meta property="og:description" content={desc} />
        <meta property="og:image" content="/myphoto.jpg" />
        <meta property="og:url" content={"http://devkeravi.site"} />
      </Head>
      <Container fluid>
        <Col>
          <Row>
            <Gnb />
          </Row>
          <Row>
            <Component {...pageProps} />
          </Row>
          <Row>
            <Col className="col-xl-8 col-xs-12" xl={{ offset: 2 }}>
              <FooterCarousel />
            </Col>
          </Row>
          <Row style={{ backgroundColor: "#423f3b" }}>
            <Footer />
          </Row>
        </Col>
      </Container>
    </>
  );
}

export default MyApp;
