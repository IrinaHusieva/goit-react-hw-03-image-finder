import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery"

export class App extends Component {
  state = {
    query: ""
  };
  handleSubmit = (query) => {
    this.setState({ query });
  }
  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit}></Searchbar>
        <ImageGallery query={this.state.query}></ImageGallery>
      </>
  )
  
  };
};
