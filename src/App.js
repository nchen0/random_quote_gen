import React, { Component } from "react";
import "./App.css";
import axios from "axios";

const colors = [
  "rgb(231, 76, 60)",
  "rgb(52, 34, 36)",
  "rgb(44, 62, 80)",
  "rgb(119, 177, 169)",
  "rgb(115, 168, 87)",
  "rgb(39, 174, 96)",
  "rgb(189, 187, 153)",
  "rgb(243, 156, 18)"
];

let body = document.querySelector("body");

function getRandom(condition) {
  if (condition === "quote") {
    return Math.floor(Math.random() * 102);
  }
  return Math.floor(Math.random() * 8);
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
    this.setState({});
  };

  render() {
    let random_number = getRandom("quote");
    let random_color = colors[getRandom("color")];
    body.style.backgroundColor = random_color;
    body.style.color = random_color;

    return (
      <div className="App">
        <div className="container">
          <div
            className="box"
            style={
              this.state.quotes && this.state.quotes[random_number].quote.length > 220
                ? { height: "400px" }
                : null
            }
          >
            <div className="quote">
              <i className="fas fa-quote-left" />
              {this.state.quotes ? (
                <p
                  className="quoteText"
                  style={
                    this.state.quotes[random_number].quote.length > 220
                      ? { marginBottom: "100px" }
                      : null
                  }
                >
                  {this.state.quotes[random_number].quote}
                </p>
              ) : null}
              <i className="fas fa-quote-right" />
            </div>

            {this.state.quotes ? (
              <p
                className="author"
                style={
                  this.state.quotes && this.state.quotes[random_number].quote.length > 220
                    ? { marginTop: "50px" }
                    : null
                }
              >
                - {this.state.quotes[random_number].author}
              </p>
            ) : null}

            <button
              className="btn btn-secondary"
              style={{ backgroundColor: `${random_color}` }}
              onClick={this.generateNew}
            >
              New Quote
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
