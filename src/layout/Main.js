import React from "react";
import styled from "styled-components";

import Sidebar from "./Sidebar";
import EmailsView from "./EmailsView";

function Main() {
  return (
    <Wrapper>
      <Sidebar />
      <EmailsView />
    </Wrapper>
  );
}

export default Main;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 270px auto 50px;
`;
