import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // redirect() {
  //   this.props.router.push('/');
  // }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.router.push("/"));
  }

  handleChange(field) {
    return (e) => {
     this.setState({ [field]: e.currentTarget.value });
   };
  }

  render() {
    const link = (this.props.formType === 'login' ? 'signup' : 'login');
    const errors = this.props.errors;
    return (
      <section>
        <h2>{ this.props.formtype }</h2>
        <form>
          <label>Username</label>
          <input type="text"
            value={ this.state.username }
            onChange={ this.handleChange("username")} />

          <label>Email</label>
          <input type="text"
            value={ this.state.email }
            onChange={ this.handleChange("email")} />

          <label>Password</label>
          <input type="password"
            value={ this.state.password }
            onChange={ this.handleChange("password")} />
        </form>
        <button onClick={ this.handleSubmit }>Submit</button>
        <Link to={`/${link}`}>{ link }</Link>
        <p>{ errors }</p>
      </section>
    );
  }
}

export default withRouter(SessionForm);
