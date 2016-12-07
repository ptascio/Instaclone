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
        <article className="big-container group">
          <section className="img-container">
            <img src={window.asset.homepage_photo} />
          </section>
          <section className="text-container">
        <section className="form-container">

          <h1 className="logo">Instaclone</h1>
          <h2 className="entice">Sign up to see photos and
            videos from your friends.</h2>
            <button>Log in as Guest</button>
            <p className="or">or</p>
          <form className="inner-form">

            <input type="text"
              value={ this.state.username }
              placeholder="Username"
              onChange={ this.handleChange("username")} />


            <input type="text"
              value={ this.state.email }
              placeholder="Email"
              onChange={ this.handleChange("email")} />


            <input type="password"
              value={ this.state.password }
              placeholder="Password"
              onChange={ this.handleChange("password")} />
            <button onClick={ this.handleSubmit }>Sign up</button>

            <p className="disclaimer">By signing up, you agree to our <strong>Terms &amp; Privacy Policy</strong>.</p>
          </form>
        </section>
        <section className="have-account">
          <p className="inside-account">Have an account? &nbsp;
              <Link to={`/${link}`}>Log In</Link>
          </p>
        </section>
      </section>
        <p>{ errors }</p>
        </article>
    </section>
    );
  }
}

export default withRouter(SessionForm);
