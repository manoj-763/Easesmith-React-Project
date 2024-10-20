import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Carousel.css"; 
import { ImageCarousel } from "../../../data/ImageCaousel"; 

const CarouselComponent = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
      partialVisibilityGutter: 20,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      partialVisibilityGutter: 20,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // Custom Arrow Button
  // eslint-disable-next-line react/prop-types
  const CustomArrow = ({ onClick, direction }) => (
    <button
      onClick={onClick}
      className={`carousel-arrow carousel-arrow-${direction}`}
    >
      {direction === "left" ? "<" : ">"}
    </button>
  );

  return (
    <div className="container-fluid p-0 my-5">
      <h1 className="mb-4" style={{ fontSize: "24px" }}>
        Nursery
      </h1>
      <div className="position-relative w-100">
        <Carousel
          responsive={responsive}
          infinite
          autoPlaySpeed={3000}
          customLeftArrow={<CustomArrow direction="left" />}
          customRightArrow={<CustomArrow direction="right" />}
          partialVisible
        >
          {ImageCarousel.map((item) => (
            <div key={item.id} className="carousel-item">
              <div>
                <img style={{width:"100%", height:"100%"}} src={item.image} alt={`Slide ${item.id}`} />
              </div>
              <p>{item.text}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselComponent;
