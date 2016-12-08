import React from 'react';

class PostForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imageFile: null,
      imageUrl: null,
      caption: "",
      username: this.props.currentUser.username,
      userId: this.props.currentUser.id
    };

    this.updateFile = this.updateFile.bind(this);
    this.updateCaption = this.updateCaption.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateCaption(e){
    e.preventDefault();
    this.setState({
      caption: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    var formData = new FormData();
    formData.append("post[caption]", this.state.caption);
    formData.append("post[image]", this.state.imageFile);
    this.props.makePost(formData);
  }

  updateFile(e) {
    //get file
    let file = e.currentTarget.files[0];
    //set up preview
    let fileReader = new FileReader();

    fileReader.onloadend = function () {
      //same thing as post model
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    }.bind(this);


    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render(){
    return (
      <section>
        <h1>Hello { this.state.username }This is the PostForm</h1>

        <form>
          <input type="file" onChange={this.updateFile}/>
          <label>Optional Caption:</label>
          <input type="text" onChange={this.updateCaption}></input>
        </form>
        <img src={this.state.imageUrl}/>
        <button onClick={this.handleSubmit}>Post your Picture!</button>
      </section>
    );
  }
}

export default PostForm;
