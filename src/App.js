import React, { Component } from "react";
import "./App.css";
import axios from "axios";

function getRandom() {
  return Math.floor(Math.random() * 102);
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      quotes: ""
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      )
      .then(response => {
        this.setState({ quotes: response.data.quotes });
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  generateNew = e => {
    e.preventDefault();
    console.log("hi");
    this.setState({});
  };

  render() {
    let random_number = getRandom();
    console.log("this.state.quotes length is is: ", this.state.quotes);
    return (
      <div className="App">
        <div className="container">
          <div className="box">
            {this.state.quotes ? (
              <div>
                <p>{this.state.quotes[random_number].quote}</p>{" "}
                <p>{this.state.quotes[random_number].author}</p>
              </div>
            ) : null}

            <button className="btn btn-secondary" onClick={this.generateNew}>
              New Quote
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
