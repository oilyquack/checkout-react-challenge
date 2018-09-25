import React from "react";
import Form from "./Form";
import Comments from "./Comments";
import Chart from "./Chart";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: []
    };

    this.receiver = this.receiver.bind(this);
  }

  receiver(review) {
    this.setState({
      reviews: [review, ...this.state.reviews]
    });
  }

  render() {
    return (
      <div className="app">
        <h1>Checkout Form</h1>
        <Form receiver={this.receiver} />
        <Chart reviews={this.state.reviews} />
        <Comments reviews={this.state.reviews} />
      </div>
    );
  }
}

export default App;
