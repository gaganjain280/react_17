import React, { Component } from "react";
import { api } from "./WooConnection.js";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
    getData() {
    const that = this;
    api.get("products?per_page=20").then(function(result) {
      that.setState({
        isLoaded: true,
        items: result
      // console.log(items)
      });

    });
  }
 componentDidMount() {
    this.getData();
  }
 render() {
    return (
      <div>
      {this.state.items.map((val, index) => (
       <p>{val.name}</p>
        ))}
      </div>)
  }    
}
export default Home;