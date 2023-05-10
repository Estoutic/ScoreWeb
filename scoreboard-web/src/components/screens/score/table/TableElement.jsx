import React from "react";
import styled from "styled-components";

const TableStyled = styled.table`
  border: 1px solid #fff;
  border-collapse: collapse;
  width: 200px;
  border-spacing: 0;
  background-color: #3bb9dd;
  margin-left: 100px;

  th,
  td {
    text-align: center;
    padding: 8px;
  }

  th {
    color: #ffffff;
    text-align: center;
    background-color: #414141;
    border-bottom: 1px solid #ddd;
  }

  tr:nth-child(even) {
    background-color: #43a7d2;
  }

  td {
    border-bottom: 1px solid #ddd;
  }

  td:last-child {
    text-align: right;
  }
`;

const Wrapper = styled.div`
  text-align: center;
  h1 {
    margin-left: 100px;
    color: #eeeeee;
    font-size: 24px;
    margin-bottom: 16px;
  }
`;

export default function TableElement({ categoryName, workerResults }) {
  return (
    <Wrapper>
      <h1>{categoryName}</h1>
      <TableStyled>
        <thead>
          <tr>
            <th>Worker</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {workerResults.map(({ workerName, score }) => (
            <tr key={workerName}>
              <td>{workerName}</td>
              <td>{score.toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </TableStyled>
    </Wrapper>
  );
}
