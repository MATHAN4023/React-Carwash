import '../css/services.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

const Services = () => {
  return (
    <Carousel className="hw100">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/1920x1080.png" // Replace with your image
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First Slide Title</h3>
          <p>Description for the first slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/1920x1080.png" // Replace with your image
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second Slide Title</h3>
          <p>Description for the second slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/1920x1080.png" // Replace with your image
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third Slide Title</h3>
          <p>Description for the third slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Services;
