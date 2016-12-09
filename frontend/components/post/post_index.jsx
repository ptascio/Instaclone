import React from 'react';
import { Link } from 'react-router';


class PostIndex extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {

  const item = this.props.posts.map(function(post, index) {
    return (
      <li key={post.id}>
        <span>{post.username}</span>
        <img src={post.image} height="200"/>

      </li>
    );
  });

    return (
      <div>
        <h1>This is posts index</h1>
        <ul>
          { item }
        </ul>
      </div>
    );
  }
}

export default PostIndex;

// export function selectAllPokemon(state) {
//   return Object.values(state.pokemon);
// }
