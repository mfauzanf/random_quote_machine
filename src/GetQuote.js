import React from 'react';
import fetch from "node-fetch";

class GetQuote extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        text:"",
        author: "",
        url:""
      };
      this.quote = this.quote.bind(this);
    }
    componentDidMount() {
      this.mounted = true; 
      if (this.mounted) {
        this.quote();
      }
    }
    componentWillUnmount() {
      this.mounted = false;
    }
    quote() {
        fetch("https://type.fit/api/quotes")
        .then(response =>response.json() )
        .then((data) => {
          var item = data[Math.floor(Math.random() * data.length)]
          this.setState({
            text: item.text,  
            author:item.author,
            url:"https://twitter.com/intent/tweet?text="+item.text+" - "+item.author
          });
        })
        .catch(error => console.log(error));
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
          <a className="button" id="tweet-quote" title="Tweet this quote!" target="_blank" rel="noopener noreferrer" href={this.state.url}>
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


  Referensi lain :
  https://codesandbox.io/s/4zyxn3qyl9?file=/src/Generator.js:643-800
  */