import styled from "styled-components";
import LinkButton from "./LinkButton";

const TopBarContainer = styled.div`
  width: 100%;
  height: 50px;
  background-color: #3bb9dd;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  position: relative;

`;

const TopBar = () => {
  return (
    <TopBarContainer>
      <LinkButton way="/worker" text={"Personal"} />
      <LinkButton way="/" text={"Global"} />
    </TopBarContainer>
  );
};

export default TopBar;
