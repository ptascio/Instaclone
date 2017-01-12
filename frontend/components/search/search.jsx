import React from 'react';
import merge from 'lodash/merge';
import { Link } from 'react-router';

class Search extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      search: this.props.searchResults
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.resetSearchResults = this.resetSearchResults.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const userName = merge({}, this.state);
    this.props.searchUsers(userName);

  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value }, () => {
        const userName = merge({}, this.state);
        this.props.searchUsers(userName);
      });
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.searchResults !== this.state.searchResults) {
      this.setState({ search: newProps.searchResults });
    }
  }

  resetSearchResults(){
    this.props.searchResults.undefined = [];
    this.setState({ body: ""});
  }

  render() {
    let results;
    if (this.props.searchResults.undefined){
      results = this.props.searchResults.undefined;
    } else {
      results = [];
    }


    const queryResults = results.map(function(user) {
      let userUrl = `/users/${user.username}`;
      return (
        <Link to={ userUrl } key={user.id}>
          <li className="search-li">
            {user.username}
          </li>
        </Link>
      );

  });

    return (
      <section>
        <form onSubmit={this.handleSubmit} className="search-bar">
          <input type="text"
            value={ this.state.body }
            placeholder="Search"
            onChange={ this.handleChange("body")}
            />
          <ul onClick={this.resetSearchResults}>
              { queryResults }
            </ul>
        </form>

      </section>
    );
  }
}

export default Search;
