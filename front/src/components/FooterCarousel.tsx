import { Carousel, Image } from "react-bootstrap";
const FooterCarousel = () => {
  return (
    <>
      <Carousel fade style={{ padding: "0", marginBottom: "5rem" }}>
        <Carousel.Item interval={5000}>
          <Image
            className="d-block w-100"
            src="/theme1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <Image
            className="d-block w-100"
            src="/books.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <Image className="d-block w-100" src="/assen.jpg" alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
};
export default FooterCarousel;
