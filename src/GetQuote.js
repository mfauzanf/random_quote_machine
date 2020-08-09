import React, { Component } from 'react';
import fetch from "node-fetch";

class GetQuote extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        text:"",
        author: "",
        url:"https://twitter.com/intent/tweet?text="
      };
      this.quote = this.quote.bind(this);
    }
    componentWillMount() {
      fetch("https://type.fit/api/quotes")
        .then((response) => {
          return response.json();
        })
        // .then((res) => this.setState({intentOptions: res.data}));
        .then((data) => {
          var item = data[Math.floor(Math.random() * data.length)]
          this.setState(state => ({
            text: item.text,
            author:item.author,
            url:"https://twitter.com/intent/tweet?text="+item.text+" - "+item.author
          }));
        });
    }
    quote() {
        fetch("https://type.fit/api/quotes")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          var item = data[Math.floor(Math.random() * data.length)]
          this.setState(state => ({
            text: item.text,
            author:item.author,
            url:"https://twitter.com/intent/tweet?text="+item.text+" - "+item.author
          }));
        })
        
     }
    render() {
      return (
        <div id="wrapper">
        <div id="quote-box">
        <div className="quote-text">
          <i className="fa fa-quote-left"> </i>{this.state.text}<span id="text"></span>
        </div>
        <div className="quote-author">
          - <span id="author">{this.state.author}</span>
        </div>
        <div className="buttons">
          <a className="button" id="tweet-quote" title="Tweet this quote!" target="_blank" href={this.state.url}>
            <i className="fa fa-twitter"></i>
          </a>
          <button className="button" id="new-quote" onClick={this.quote}>New quote</button>
        </div>
      </div>
      </div>
      );
    }
  };
  
  export default GetQuote;

/* 
  Fix cannot-read-property-setstate-of-undefined
  https://stackoverflow.com/questions/49600249/reactjs-cannot-read-property-setstate-of-undefined

  */