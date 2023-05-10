import React from "react";
import styled from "styled-components";

const CategoryContainer = styled.div`
  margin-bottom: 20px;
  flex-grow: 1;
  margin-right: 20px;
  margin-left: 20px;
`;

const CategoryHeader = styled.h3`
  color: white;
  font-size: 24px;
  margin-bottom: 10px;
  text-align:  center;
  
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #fff;
`;

const TableRow = styled.tr`
  color: #ffffff;
  text-align: center;
  background-color: #414141;
  border-bottom: 1px solid #ddd;
  &:nth-child(even) {
    background-color: #43a7d2;
    color: white;
    border: 0px;
  }
`;

const TableHeader = styled.th`
  background-color: #3bb9dd;
  color: white;
  padding: 10px;
  text-align: center;
  background-color: #414141;
`;

const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const WorkerName = styled.div`
  font-weight: bold;
`;

const TaskScore = styled.div`
  font-size: 16px;
`;

export default function TableElement({ categoryName, workerResults }) {
  return (
    <CategoryContainer>
      <CategoryHeader>{categoryName}</CategoryHeader>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Worker</TableHeader>
            <TableHeader>Score</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {workerResults.map(({ workerName, score }) => (
            <TableRow key={workerName}>
              <TableCell>
                <WorkerName>{workerName}</WorkerName>
              </TableCell>
              <TableCell>
                <TaskScore>{score.toFixed(2)}%</TaskScore>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </CategoryContainer>
  );
}
