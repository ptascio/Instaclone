import React from 'react';
const Modal = require('react-modal');

class UserFollowing extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      modalOpen: this.props.modalOpen
    };
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(){
    this.setState({ modalOpen: true });
  }

  closeModal(){
    this.props.modalOpen = !this.props.modalOpen;
  }

  render(){
    return(
      <Modal
        isOpen={this.state.modalOpen}
        contentLabel="Modal"
        >
        <span onClick={this.state.modalOpen}>X</span>
        <ul>
          <li>Milk</li>
          <li>Eggs</li>
        </ul>
      </Modal>
    );
  }
}

export default UserFollowing;
