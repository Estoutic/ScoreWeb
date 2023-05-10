import React from "react";
import styled from "styled-components";
import CategoryResult from "./CategoryResult";

const CategoriesListContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto; 
`;

const CategoryItem = styled.div`
  margin-right: 10px; 
`;

function CategoriesList({ workerCategoryResults }) {
  return (
    <CategoriesListContainer>
      {workerCategoryResults.map((category) => (
          <CategoryResult key={{}}{...category} />
      ))}
    </CategoriesListContainer>
  );
}

export default CategoriesList;
