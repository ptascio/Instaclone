import React from 'react';

class PostIndex extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
   const firstPost = this.props.posts[0];
   let name;
   if (firstPost) {
    name = firstPost["image"];
  }
  debugger
    return (
      <div>
        <h1>This is posts index</h1>
        <img src={ name } />
      </div>
    );
  }
}

export default PostIndex;

// export function selectAllPokemon(state) {
//   return Object.values(state.pokemon);
// }
