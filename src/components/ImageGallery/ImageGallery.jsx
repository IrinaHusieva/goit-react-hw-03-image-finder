import { Component } from "react";
import { fetchGallery } from "api/api";


const IMAGES_PER_PAGE = 12;

export class ImageGallery extends Component {
    state = {
        images: []
    }

     componentDidUpdate(prevProps) {
  if (this.props.query !== prevProps.query && this.props.query !== "") {
    this.fetchImages(); 
  }
}

    fetchImages = async () => {
    try {
      const data = await fetchGallery(this.props.query, IMAGES_PER_PAGE);
      this.setState({ images: data.hits });
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };
    
    render() {
        const { images } = this.state;
        return (
            <ul className="gallery">
{images.map((image) => ( <li key={image.id}>
            <img src={image.webformatURL} alt="" />
          </li>
        ))}
</ul>
        )
    }
}