import axios from 'axios'
const KEY = '37182303-6c1ecd301a2c09e566ab94b43';

async function fetchGallery(query, page, perPage) {
    const url = `https://pixabay.com/api/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`;
    const res = await axios.get(url);
    return res.data;
}
export { fetchGallery };

