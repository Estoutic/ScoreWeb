import { useQueries } from "react-query";
import ScoreTable from "./table/ScoreTable";

function Scores() {
  const queryResults = useQueries([
    {
      queryKey: "first",
      queryFn: () =>
        fetch("http://0.0.0.0:8080/score/category/first").then((res) =>
          res.json()
        ),
    },
    {
      queryKey: "second",
      queryFn: () =>
        fetch("http://0.0.0.0:8080/score/category/second").then((res) =>
          res.json()
        ),
    },
    {
      queryKey: "third",
      queryFn: () =>
        fetch("http://0.0.0.0:8080/score/category/third").then((res) =>
          res.json()
        ),
    },
  ]);

  const isLoading = queryResults.some((result) => result.isLoading);
  const error = queryResults.find((result) => result.error);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Oops! An error occurred: {error.message}</div>;
  }

  const data = queryResults.map((result) => result.data);

  return (
    <div>
      <ScoreTable  data = {data[0]}/>
      <ScoreTable  data = {data[1]}/>
      <ScoreTable  data = {data[2]}/>
    </div>
  );
}
export default Scores;
