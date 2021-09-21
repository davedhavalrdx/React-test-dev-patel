import React from "react";
import styled from "styled-components";

import FlagIcon from "@material-ui/icons/Flag";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch } from "react-redux";
import { Flag, Delete, Read } from "../store/action/action";

const EmailItem = ({ from, subject, message, received, read, flag, id }) => {
  const dispatch = useDispatch();
  const handleFlag = (id, flag) => {
    dispatch(Flag({ id, flag }));
  };

  const handleDelete = (id) => {
    dispatch(Delete(id));
  };

  const handleRead = (id, read) => {
    dispatch(Read({ id, read }));
  };

  return (
    <Wrapper
      onClick={() => {
        handleRead(id, read);
      }}
    >
      <p style={{ marginRight: "15px" }}>{from}</p>
      <div>
        <p style={{ marginRight: "5px" }}>{subject}</p> -{" "}
        <span style={{ marginLeft: "5px" }}>{message}</span>
        {!read && <Badge>{1}</Badge>}
      </div>
      <div className="Iconwrapper">
        <p className="time">{received}</p>
        <div className="icons">
          <FlagIcon
            onClick={() => handleFlag(id, flag)}
            style={flag ? { fill: "#143aa5" } : { fill: "#cac6c6" }}
          />
          <DeleteIcon onClick={() => handleDelete(id)} />
        </div>
      </div>
    </Wrapper>
  );
};

export default EmailItem;

const Wrapper = styled.div`
  border-top: 1px solid lightgray;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 8px 20px;
  div {
    display: flex;

    span {
      color: darkgray;
    }
  }

  .time {
    colors: black;
    font-weight: bolder;
  }
  .Iconwrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-left: auto;
    justify-content: end;
    .icons {
      margin-top: 6px;
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: end;
    }
  }
`;
const Badge = styled.span`
  margin-left: auto;
  width: 20px;
  height: 20px;
  background: #143aa5;
  border-radius: 7px;
  text-align: center;
  color: #fff;
  font-size: 12px;
  line-height: 20px;
  margin-left: 10px;
`;
