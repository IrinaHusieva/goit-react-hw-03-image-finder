import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import styled from './app.module.css'

export class App extends Component {
  state = {
    query: ""
  };
  handleSubmit = (query) => {
    this.setState({ query });
    
  }
   
  render() {
    return (
      <div className={styled.App}>
        <Searchbar onSubmit={this.handleSubmit} ></Searchbar>
        <ImageGallery query={this.state.query}></ImageGallery>
      </div>
  )
  
  };
};
