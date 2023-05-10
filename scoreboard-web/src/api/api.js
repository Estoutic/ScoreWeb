import axios from 'axios';

export const getCategoryInfo = async (categoryId) => {
  const { data } = await axios.get(`http://213.183.41.33:8080/category/${categoryId}/all`);
  return data;
};
export const getWorkerCategoriesInfo =  async (workerId) => {
  const { data } = await axios.get(`http://213.183.41.33:8080/worker/${workerId}/scores`);
  return data;
};
