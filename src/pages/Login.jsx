import React from "react";
import Heroes from "./Heroes";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",

    };
  }
  validaEmailPassword = () => {
    const max = 6;
    const validaEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const { email, password, name } = this.state;
    localStorage.setItem('user', JSON.stringify(name))
    return !(validaEmail.test(email) && password.length >= max && name !== '');
  
  }
  handleClick = async () =>{
    this.props.history.push("/account")
  }
  handleChange = (event) => {
    this.setState({ email: event.target.value });
  };
  handlePassword = (event) => {
    this.setState({ password: event.target.value });
  };
  handleChangeName = (event) =>{
    this.setState({ name : event.target.value})
  }
  
  render() {
    const { email, password, name } = this.state;
    return (
      <div>
        <form>
          <label>Usuário
            <input type="name" value={name} placeholder= "insria seu nome de usuario"
            required
            onChange={this.handleChangeName}/>
          </label>
          <label htmlFor="">
            Email:
            <input
              type="email"
              value={email}
              onChange={this.handleChange}
              placeholder="email@email.com"
            />
          </label>
          <label>
            Senha:
            <input
              type="password"
              value={password}
              onChange={this.handlePassword}
            />
          </label>
          <div>
            <button  disabled={ this.validaEmailPassword() }
            onClick={this.handleClick} type="button" >
              Entrar
            </button>
          </div>
        </form>
        <Heroes/>
      </div>
    );
  }
}

export default Login;
