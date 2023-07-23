import { Component } from "react";
import { fetchGallery } from "api/api";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { Button } from "components/Button/Button";

const IMAGES_PER_PAGE = 12;

export class ImageGallery extends Component {
    state = {
      images: [],
      currentPage:1
    }

     componentDidUpdate(prevProps) {
  if (this.props.query !== prevProps.query && this.props.query !== "") {
    this.fetchImages(); 
  }
}

    fetchImages = async () => {
    const { query } = this.props;
    const { currentPage, images } = this.state;
    try {
      const data = await fetchGallery(query, currentPage, IMAGES_PER_PAGE);
      this.setState({
        images: [...images, ...data.hits],
        currentPage: currentPage + 1,
      });
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  handleLoadMore = () => {
    this.fetchImages();
  };
  
  
    render() {
        const { images } = this.state;
      return (
        <>
        <ul className="gallery">
          {images.map((image) => (<ImageGalleryItem key={image.id} image={image} />
          ))}
        </ul>
          <Button onClick={this.handleLoadMore} showButton={images.length > 0} />
          </>
      );
    }
}