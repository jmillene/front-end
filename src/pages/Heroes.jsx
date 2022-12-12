import React from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "../teste.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
class Heroes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: [],
    };
  }

  async componentDidMount() {
    await axios.get(`http://localhost:3027/heroes`).then((res) => {
      const heroes = res.data;
      this.setState({ heroes });
    });
  }

  render() {
    return (
      <>
        <br />
        <br />
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={true}
          pagination={{ clickable: true }}
          loop={true}
          className="swiper-container italic"
        >
          <div>
            <div>
              <>
                <ul className="slide-item">
                  {this.state.heroes.map((heroes) => (
                    <SwiperSlide>
                      <div>
                        <ul key={heroes.id}></ul>
                      </div>
                      <div>
                        <ul className="text">{heroes.name}</ul>
                      </div>
                      <div>
                        <ul>
                          <img
                            className="slide-item "
                            src={heroes.image}
                            alt="img"
                          />
                        </ul>
                      </div>
                    </SwiperSlide>
                  ))}
                </ul>
              </>
            </div>
          </div>
        </Swiper>
      </>
    );
  }
}

export default Heroes;
