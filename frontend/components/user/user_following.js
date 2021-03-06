import React from 'react';
import { Link, withRouter } from 'react-router';
const Modal = require('react-modal');

class UserFollowing extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      modalOpen: this.props.modalOpen,
      following: this.props.following,
    };
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(){
    this.setState({ modalOpen: true });
  }

  closeModal(){
    this.setState({ modalOpen: false });
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      modalOpen: nextProps.modalOpen,
      following: this.props.following
    });
  }

  render(){
    console.log("following");
    let info = this.props.following;
    let following = Object.keys(info).map(function (key){
      return info[key];
    });

    const listFollowing = following.map(function(username, index){

      let userUrl = `/users/${username.username}`;
      return(
        <li className="user-follow" key={index} >
          <Link to={ userUrl }>
            {username.username}
          </Link>
        </li>
      );
    });


    const customStyles = {
      overlay : {
        position        : 'fixed',
        top             : 0,
        left            : 0,
        right           : 0,
        bottom          : 0,
        backgroundColor : 'rgba(0, 0, 0, 0.75)',
        zIndex          : 10
      },
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
      }
    };

    return(
      <Modal
        isOpen={this.state.modalOpen}
        style={customStyles}
        contentLabel="Modal"
        >
        <span className="close-follow-modal" onClick={this.closeModal}>X</span>
        <ul onClick={this.closeModal}>
          { listFollowing }
        </ul>
      </Modal>
    );
  }
}

export default UserFollowing;
