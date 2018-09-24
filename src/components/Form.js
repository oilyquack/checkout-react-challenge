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
    this.handleHover = this.handleHover.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
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

  handleHover(event) {
    // event.preventDefault();

    const hovered = event.target.id;

    for (let i = 1; i <= hovered; i++) {
      const star = document.getElementById(i);
      star.innerText = "⭑";
    }

    for (let i = hovered + 1; i <= 5; i++) {
      const star = document.getElementById(i);
      star.innerText = "☆";
    }
  }

  handleLeave(event) {
    const stars = document.querySelectorAll(".star");

    stars.forEach(star => (star.innerText = "☆"));
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

        <div id="app__form__rating">
          <span
            className="star"
            id="1"
            onMouseEnter={this.handleHover}
            onMouseLeave={this.handleLeave}
          >
            ☆
          </span>
          <span
            className="star"
            id="2"
            onMouseEnter={this.handleHover}
            onMouseLeave={this.handleLeave}
          >
            ☆
          </span>
          <span
            className="star"
            id="3"
            onMouseEnter={this.handleHover}
            onMouseLeave={this.handleLeave}
          >
            ☆
          </span>
          <span
            className="star"
            id="4"
            onMouseEnter={this.handleHover}
            onMouseLeave={this.handleLeave}
          >
            ☆
          </span>
          <span
            className="star"
            id="5"
            onMouseEnter={this.handleHover}
            onMouseLeave={this.handleLeave}
          >
            ☆
          </span>
        </div>

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
