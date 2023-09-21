import "./home.css";
import { Carousel } from "react-responsive-carousel";
import beast from "../assets/beast.jpg";
import chat from "../assets/chat.png";

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
            <img src={beast.png} alt="MrBeast" />
          </div>
          <div>
            <img src={chat.jpg} alt="GoofyCat" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}