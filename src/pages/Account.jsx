import React from "react";
// import md5 from "md5";
import heroes from '../api'

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      heroes:[]
    };
  }
    logout = () => {
    localStorage.clear();
    this.props.history.push('/');
  };
  async componentDidMount() {
    const name = JSON.parse(localStorage.getItem("user"));
    this.setState({ name });
    this.setState({ heroes });
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
      <div>
        <button
          type="button"
          onClick={ this.logout }
          data-testid="customer_products__element-navbar-link-logout"
        >
          Logout
        </button>
        <h1>Olá, {name}</h1>
        <>
          <ul>
            {this.state.heroes.map((heroes) => (
              <>
                <div>
                  <ul key={heroes.id}></ul>
                </div>
                <div>
                  <ul>{heroes.name}</ul>
                </div>
                <div>
                  <ul>
                    <img src={heroes.image} alt="img" />
                  </ul>
                </div>
              </>
            ))}
          </ul>
        </>
        
      </div>

    );
  }
}

export default Account;
