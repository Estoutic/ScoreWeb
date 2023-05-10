import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  background-color: #3bb9dd;
  border: 2px solid;
  border-radius: 4px;
  border-color: #5f5d59;
  color: #444141;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.3s ease;
  padding: 14px 24px;
  &:hover {
    color: #303537;
  }
`;

const LinkButton = ({ way, text }) => {
  return <StyledLink to={`${way}`}>{text}</StyledLink>;
};
export default LinkButton;
