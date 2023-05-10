import React from "react";
import useCategories from "../../../../api.resources.category/UseCategories";
import TableElement from "./TableElement";

export default function ScoreTable({ categoryId }) {
  const { data, isLoading, error } = useCategories({ categoryId });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>{error ? `Error: ${error.message}` : "No data available"}</div>;
  }
  const { categoryName, workerResults } = data;

  return (
    <TableElement
      categoryName={categoryName}
      workerResults={workerResults}
    ></TableElement>
  );
}
