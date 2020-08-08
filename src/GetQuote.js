import React, { Component } from 'react';
import fetch from "node-fetch";

class GetQuote extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        text:"Of all things, I liked books best.",
        author: "Nikola Tesla"
      };
      this.quote = this.quote.bind(this);
    }
    quote() {
        fetch("https://type.fit/api/quotes")
        .then((response) => {
          return response.json();
        })
        // .then((res) => this.setState({intentOptions: res.data}));
        .then((data) => {
          var item = data[Math.floor(Math.random() * data.length)]
          console.log(item.text);
          console.log(item.author);
          this.setState(state => ({
            text: item.text,
            author:item.author
          }));
        });
    }
    render() {
      return (
        <div id="quote-box">
        <div className="quote-text">
          <i className="fa fa-quote-left"> </i>{this.state.text}<span id="text"></span>
        </div>
        <div className="quote-author">
          - <span id="author">{this.state.author}</span>
        </div>
        <div className="buttons">
          <a className="button" id="tweet-quote" title="Tweet this quote!" target="_blank">
            <i className="fa fa-twitter"></i>
          </a>
          <a className="button" id="tumblr-quote" title="Post this quote on tumblr!" target="_blank">
            <i className="fa fa-tumblr"></i>
          </a>
          <button className="button" id="new-quote" onClick={this.quote}>New quote</button>
        </div>
      </div>


        // <div>
        //   <button className='inc' onClick={this.increment}>Increment!</button>
        //   <button className='dec' onClick={this.decrement}>Decrement!</button>
        //   <button className='reset' onClick={this.reset}>Reset</button>
        //   <h1>Current Count: {this.state.count}</h1>
        // </div>
      );
    }
  };
  
  export default GetQuote;

/* 
  Fix cannot-read-property-setstate-of-undefined
  https://stackoverflow.com/questions/49600249/reactjs-cannot-read-property-setstate-of-undefined

  */