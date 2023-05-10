import categoryKeys from "./keys";
import { getCategoryInfo } from "../components/screens/score/services/api";
import { useQuery } from "react-query";

const useCategories = ({categoryId}) => {
  return useQuery([categoryKeys, categoryId], () =>
    getCategoryInfo(categoryId)
  );

};

export default useCategories;
