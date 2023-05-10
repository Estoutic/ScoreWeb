import axios from 'axios';

export const getCategoryInfo = async (categoryId) => {
  const { data } = await axios.get(`http://0.0.0.0:8080/category/${categoryId}/all`);
  return data;
};
