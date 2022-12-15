import React from "react";
// import md5 from "md5";
import heroes from "../api";
class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      heroes: [],
    };
  }
  logout = () => {
    localStorage.clear();
    this.props.history.push("/");
  };
  async componentDidMount() {
    // console.log(heroes);
    const name = JSON.parse(localStorage.getItem("user"));
    this.setState({ name });
    this.setState({ heroes });
    console.log(heroes);
    // const publicKey = "9d37a4c8e31380d33a978ea82886b33c";
    // const privateKey = "c9833087c2e100a490a5baebd36eda2cb39a2acd";
    // const time = Number(new Date());
    // const hash = md5(time + privateKey + publicKey);
    // await axios
    //   .get(
    //     `http://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${publicKey}&hash=${hash}`
    //   )
    //   .then((res) => {
    //     const heroes = res.data.data.results;
    //     console.log(heroes);
    //      this.setState({ heroes });
    //   });
  }
  render() {
    const { name} = this.state;
    return (
      <>
        <h1>Escolha um Herói ou Vilão e veja novidades sobre ele.</h1>
        <div className="flex flex-wrap m-5">
          <button
            className="border-inherit"
            type="button"
            onClick={this.logout}
          >
            Logout
          </button>
        </div>
        <div className="flex flex-wrap text-center m-10 gap-10 italic font-extrabold">
          <h1>Olá, {name}</h1>
          <div>
            <ul className="text-center w-1/6 m-10 leading-10	 ">
              {this.state.heroes.map((heroes) => (
                <div key={heroes.id}>
                  <div>
                    <ul>{heroes.name}</ul>
                  </div>
              
                  <div>
                    <ul>
                      <img
                        onClick={() => this.props.history.push(`/details/${heroes.id}`)}
                        src={heroes.image}
                        alt="img"
                      />
                    </ul>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Account;
