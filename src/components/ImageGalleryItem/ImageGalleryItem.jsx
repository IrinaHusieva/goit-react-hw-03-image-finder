export const ImageGalleryItem = ({image}) => {
    return (
        <li key={image.id}>
            <img src={image.webformatURL} alt={image.tags} />
        </li>
    );
}