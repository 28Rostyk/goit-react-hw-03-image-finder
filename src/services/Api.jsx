import axios from 'axios';
const API_KEY = '31910898-50bf1f8c70306f6b7b25ce5eb';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = async (search, page) => {
  const { data } = await axios.get(
    `${BASE_URL}?q=${search}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
};