import React from "react";
import styled from "styled-components";

const Badge = ({ value }) => {
  return <BadgeStyle>{value}</BadgeStyle>;
};

export default Badge;

const BadgeStyle = styled.span`
  margin-left: auto;
  width: 20px;
  height: 20px;
  background: #143aa5;
  border-radius: 7px;
  text-align: center;
  color: #fff;
  font-size: 12px;
  line-height: 20px;
`;
