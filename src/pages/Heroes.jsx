import React from "react";
import axios from "axios";

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
      <><h1 className="text-center bg-black text-white leading-loose  text-4xl 	">
        Bem-vindos ao mundo de Heróis e Vilões</h1>
        <div className="w-full text-white bg-black columns-2">

        <ul className="flex flex-wrap text-white rounded-full p-10 itext-right m-20 leading-10">
          {this.state.heroes.map((heroes) => (
            <div>
              <div>
                <li key={heroes.id}></li>
              </div>
              <div className="text-center	">
              <li>{heroes.name}</li>
            </div>
              {/* <div className="w-1/3	">
              <li>{heroes.gender}</li>
            </div> */}
              {/* <div className="w-1/3	">
              <li>{heroes.alignment}</li>
            </div> */}
              <div >
                <li>
                  <img className="rounded-full" src={heroes.image} alt="" />
                </li>
              </div>
            </div>
          ))}
        </ul>
      </div></>
    );
  }
}

export default Heroes;
