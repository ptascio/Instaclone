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
    this.props.makePost(formData, this.goBack);
  }

  goBack() {
    this.context.router.push("/");
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
      <section className="big-section">
        <h1>Hello { this.state.username }This is the PostForm</h1>
        <h2>Upload</h2>
        <form className="post-container">
          <label className="myLabel">
            <input type="file" onChange={this.updateFile}/>
            <span className="inside-span">Choose File</span>
          </label>
          <div className="caption-label">
            <input className="caption" type="text" onChange={this.updateCaption} placeholder="Caption"></input>
          </div>
            <img src={this.state.imageUrl} className="image-container"/>
            <button onClick={this.handleSubmit} className="post-button">Post your Picture!</button>
        </form>
      </section>
    );
  }
}

export default PostForm;
