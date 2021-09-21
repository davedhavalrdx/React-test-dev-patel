import React, { useEffect } from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import EmailItem from "../components/EmailItem";

const EmailsView = () => {
  const filterSelector = useSelector((state) => state.filterReducer);
  return (
    <Wrapper>
      <EmailsContainer>
        {filterSelector.map(
          ({ flag, from, subject, message, received, read, id, deleted }) => (
            <EmailItem
              from={from}
              subject={subject}
              message={message}
              received={received}
              read={read}
              flag={flag}
              deleted={deleted}
              id={id}
              key={id}
            />
          )
        )}
      </EmailsContainer>
    </Wrapper>
  );
};

export default EmailsView;

const Wrapper = styled.div``;
const EmailsContainer = styled.div``;
