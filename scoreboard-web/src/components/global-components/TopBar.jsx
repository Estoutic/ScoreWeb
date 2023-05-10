import styled from "styled-components";
import LinkButton from "./LinkButton";

const TopBarContainer = styled.div`
  width: 100%;
  height: 50px;
  background-color: #3bb9dd;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;

`;

const TopBar = () => {
  return (
    <TopBarContainer>
      <LinkButton way="/worker" text={"Worker"} />
      <LinkButton way="/" text={"Home"} />
    </TopBarContainer>
  );
};

export default TopBar;
