import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      comment: ""
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    event.preventDefault();

    this.setState({
      name: event.target.value
    });
  }

  handleEmailChange(event) {
    event.preventDefault();

    this.setState({
      email: event.target.value
    });
  }

  handleCommentChange(event) {
    event.preventDefault();

    this.setState({
      comment: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const name = this.state.name;
    const email = this.state.email;
    const comment = this.state.comment;

    const newReview = {
      name,
      email,
      comment
    };

    this.props.receiver(newReview);

    this.setState({
      name: "",
      email: "",
      comment: ""
    });

    document.querySelector("#name-input").value = "";
    document.querySelector("#email-input").value = "";
    document.querySelector("#comment-input").value = "";
  }

  render() {
    return (
      <form className="app__form" onSubmit={this.handleSubmit}>
        <label>Name</label>
        <input
          id="name-input"
          placeholder="Name"
          type="text"
          onChange={this.handleNameChange}
          required
        />
        <label>Email</label>
        <input
          id="email-input"
          placeholder="Email"
          type="email"
          onChange={this.handleEmailChange}
          required
        />
        <label>Comment</label>
        <input
          id="comment-input"
          placeholder="Comment"
          type="text"
          maxLength="280"
          onChange={this.handleCommentChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default App;
