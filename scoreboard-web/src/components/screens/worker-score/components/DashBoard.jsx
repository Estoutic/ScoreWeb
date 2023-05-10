import React from "react";
import useWorkerCategories from "../../../../api/UseWokerCategories";
import styled from "styled-components";
import CategoriesList from "./CategoriesList";

const Title = styled.h1`
  font-size: 32px;
  text-align: left;
  margin-left: 30px;
  color: white;
`;

const Container = styled.div`
  width: 100%;
`;

export default function DashBoard({ workerId }) {
  const { data, isLoading, error } = useWorkerCategories({ workerId });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>{error ? `Error: ${error.message}` : "No data available"}</div>;
  }

  console.log(data);

  return (
    <Container>
      <Title>Personal Score {data.username}</Title>
      <CategoriesList workerCategoryResults={data.workerCategoryResults} />
    </Container>
  );
}
