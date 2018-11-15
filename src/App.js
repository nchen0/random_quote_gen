import React, { Component } from "react";
import "./App.css";
import axios from "axios";

let body = document.querySelector("body");
body.style.backgroundColor = "rgb(115, 168, 87)";
console.log("body.style.backgroundColor is: ", body.style.backgroundColor);

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
            <div className="quote">
              <i className="fas fa-quote-left" />
              {this.state.quotes ? (
                <p className="quoteText">{this.state.quotes[random_number].quote}</p>
              ) : null}
              <i className="fas fa-quote-right" />
            </div>

            {this.state.quotes ? (
              <p className="author">- {this.state.quotes[random_number].author}</p>
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
