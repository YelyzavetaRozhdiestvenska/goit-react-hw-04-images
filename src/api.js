import axios from 'axios';

const API_KEY = '38086992-da778ca69db0828eccdceea4f';
axios.defaults.baseURL = `https://pixabay.com/api/`;

// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

export const fetchImages = async (query, page=1) => {
   try {
    const response = await axios.get(`?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
    return response.data.hits;
   } catch (error) {
    console.log(error);
    throw error;
   }
 
};