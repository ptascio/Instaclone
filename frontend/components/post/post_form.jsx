import React from 'react';
import { withRouter } from 'react-router';
import { hashHistory } from 'react-router'
;
class PostForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imageFile: null,
      imageUrl: null,
      caption: "",
      username: this.props.currentUser.username,
      userId: this.props.currentUser.id,
      postId: this.props.postId
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
    this.props.makePost(formData).then(hashHistory.push("/"));
  }

  updateFile(e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    }.bind(this);


    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render(){
    return (
      <section className="big-section">

        <section className="post-container group">

          <h2 className="upload">Upload</h2>
        <form>
          <label className="myLabel">
            <input type="file" onChange={this.updateFile} className="myLabel-button"/>
            <span className="mask">Choose File</span>
          </label>
          <img src={this.state.imageUrl} className="image-container"/>
          <div className="caption-label">
            <textarea className="caption" type="text" onChange={this.updateCaption} placeholder="Caption"></textarea>
          </div>
            <button onClick={this.handleSubmit} className="post-button">Post your Picture!</button>
        </form>
      </section>
      </section>
    );
  }
}

export default withRouter(PostForm);
