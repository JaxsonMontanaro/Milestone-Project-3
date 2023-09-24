import "./home.css";
import { Carousel } from "react-responsive-carousel";
import beast from "../assets/beast.jpg";
import chat from "../assets/chat.png";
import MP1 from "../assets/MP1.png";
import S1 from "../assets/S1.png";
import S2 from "../assets/S2.png";
import S3 from "../assets/S3.png";
import S4 from "../assets/S4.png";
import S5 from "../assets/S5.png";

export default function home() {
  return (
    <div id="homepage">
      <div id="home"></div>
      <div id="top"></div>
      <div className="img-carousel">
        <Carousel
          animationHandler="fade"
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          interval={3000}
          stopOnHover={false}
          swipeable={false}
        >
          <div>
            <img src={MP1} alt="Milestone Project 1 Image" />
          </div>
          <div>
            <img src={S1} alt="Milestone Project 2 Image 1" />
          </div>
          <div>
            <img src={S2} alt="Milestone Project 2 Image 2" />
          </div>
          <div>
            <img src={S3} alt="Milestone Project 2 Image 3" />
          </div>
          <div>
            <img src={S4} alt="Milestone Project 2 Image 4" />
          </div>
          <div>
            <img src={S5} alt="Milestone Project 2 Image 5" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
