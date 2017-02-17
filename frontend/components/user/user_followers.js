import React from 'react';
import { Link, withRouter } from 'react-router';
const Modal = require('react-modal');

class UserFollowers extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      modalOpen: this.props.modalOpen,
      followers: this.props.followers,
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
      followers: this.props.followers
    });
  }

  render(){
    let info = this.props.followers;
    let followers = Object.keys(info).map(function (key){
      return info[key];
    });


    const listFollowers = followers.map(function(username, index){

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
  console.log("followers");
    return(
      <Modal
        isOpen={this.state.modalOpen}
        style={customStyles}
        contentLabel="Modal"
        >
        <span className="close-follow-modal" onClick={this.closeModal}>X</span>
        <ul onClick={this.closeModal}>
          { listFollowers }
        </ul>
      </Modal>
    );
  }
}

export default UserFollowers;
