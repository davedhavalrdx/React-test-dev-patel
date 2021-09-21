import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";

import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useSelector, useDispatch } from "react-redux";
import { Filter } from "../store/action/action";

function Header() {
  const filterData = useSelector((state) => state.emailReducer);
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (event) => {
    setSearchInput(event.target.value);
    handleSearch(event.target.value);
  };

  const handleSearch = (search) => {
    let filteredData = filterData.filter((value) => {
      return (
        value.from.toLowerCase().includes(search.toLowerCase()) ||
        value.subject.toLowerCase().includes(search.toLowerCase()) ||
        value.message.toString().toLowerCase().includes(search.toLowerCase())
      );
    });
    dispatch(Filter(filteredData));
  };

  return (
    <Wrapper>
      <LogoWrapper>
        <Menu>
          <MenuIcon />
        </Menu>
        <Logo>React Test</Logo>
      </LogoWrapper>

      <SearchWrapper>
        <SearchBarWrapper>
          <SearchIconWrapper />
          <input
            type="text"
            value={searchInput}
            onChange={handleChange}
            placeholder="Search mail"
          />
          <ExpandMoreIcon />
        </SearchBarWrapper>
      </SearchWrapper>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 270px auto 170px;
  border-bottom: 1px solid lightgray;
  height: 70px;
  align-items: center;
`;
const LogoWrapper = styled.div`
  height: 45px;
  display: grid;
  grid-template-columns: 25% auto;
`;

const SearchIconWrapper = styled(SearchIcon)`
  color: #5f6368;
`;

const Menu = styled.div`
  display: grid;
  place-items: center;
`;

const Logo = styled.div`
  margin: 9px 0 0 0;
  font-weight: bold;
  font-size: 18px;
`;

const SearchWrapper = styled.div``;

const SearchBarWrapper = styled.div`
  background-color: #f1f3f4;
  width: 100%;
  max-width: 750px;
  display: grid;
  grid-template-columns: 10% auto 7%;
  place-items: center;
  height: 45px;
  border-radius: 6px;

  .MuiSvgIcon-root {
    color: #5f6368;
  }

  input {
    width: 100%;
    height: 30px;
    background: none;
    border: none;
    font-size: 18px;

    :focus {
      outline: none;
    }
  }
`;
