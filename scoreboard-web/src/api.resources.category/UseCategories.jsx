import categoryKeys from "./keys/keys";
import { getCategoryInfo } from "./api";
import { useQuery } from "react-query";

const useCategories = ({categoryId}) => {
  return useQuery([categoryKeys, categoryId], () =>
    getCategoryInfo(categoryId)
  );

};

export default useCategories;
