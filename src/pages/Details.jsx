import React from "react";
import withRouter from "../componentes/withRouter";
import { Player } from "video-react";
import heroes from "../api";
import "../teste.css";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      name: "",
      image: [],
      description: "",
      trailer: [],
    };
  }
  logout = () => {
    localStorage.clear();
    this.props.history.push("/");
  };
  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const idHeroes = heroes.find((heroe) => heroe.id === Number(id));
    this.setState({
      name: idHeroes.name,
      image: idHeroes.image,
      description: idHeroes.description,
      trailer: idHeroes.trailer,
    });
  }
  render() {
    const { name, image, description, trailer } = this.state;
    return (
      <div>
        <div>
          <button
            className="border-inherit"
            type="button"
            onClick={this.logout}
          >
            Logout
          </button>
        </div>
        <div className="flex flex-wrap p-20 m-10 text-center">
          <h1>{name}</h1>
          <h1 className="w-1/2">{<img src={image} alt="img" />}</h1>
          <h1 className="color">{description}</h1>
          <Player playsInline poster="/assets/poster.png" src={trailer} />
        </div>
      </div>
    );
  }
}

export default withRouter(Details);
