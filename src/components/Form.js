import React from "react";

class App extends React.Component {
  render() {
    return (
      <form className="app__form">
        <label>Name</label>
        <input placeholder="Name" type="text" required />
        <label>Email</label>
        <input placeholder="Email" type="email" required />
        <label>Comment</label>
        <input placeholder="Comment" type="text" maxLength="280" required />
      </form>
    );
  }
}

export default App;
