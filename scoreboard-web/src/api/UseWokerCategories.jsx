import workerKeys from "./keys/keys";
import { getWorkerCategoriesInfo } from "./api";
import { useQuery } from "react-query";

const useWorkerCategories = ({workerId}) => {
  return useQuery([workerKeys, workerId], () =>
    getWorkerCategoriesInfo(workerId)
  );

};

export default useWorkerCategories;
