import React from "react";

import styled from "styled-components";
import InboxIcon from "@material-ui/icons/Inbox";
import FlagIcon from "@material-ui/icons/Flag";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import DeleteIcon from "@material-ui/icons/Delete";
import Badge from "../components/Badge";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const filterSelector = useSelector((state) => state.filterReducer);
  const emailSelector = useSelector((state) => state.emailReducer);
  const flagged = filterSelector.filter((item) => item.flag === true).length;
  const deleted = emailSelector.filter((item) => {
    return !filterSelector.some(function (item2) {
      return item.id === item2.id; // return the ones with equal id
    });
  }).length;
  const unread = filterSelector.filter((item) => item.read === false).length;

  const sidebarButtonItems = [
    {
      icon: <InboxIcon />,
      text: "Inbox",
      badgeCount: unread,
    },
    {
      icon: <FlagIcon />,
      text: "Flagged",
      badgeCount: flagged,
    },
    {
      icon: <WatchLaterIcon />,
      text: "Spam",
      badgeCount: 0,
    },
    {
      icon: <DeleteIcon />,
      text: "Deleted",
      badgeCount: deleted,
    },
  ];

  return (
    <Wrapper>
      <TopSectionWrapper>
        <SideButtonsWrapper>
          {sidebarButtonItems.map((item, index) => (
            <SidebarButtonItem key={index}>
              {item.icon}
              <SidebarText>{item.text}</SidebarText>
              {item?.badgeCount !== 0 && <Badge value={item.badgeCount} />}
            </SidebarButtonItem>
          ))}
        </SideButtonsWrapper>
      </TopSectionWrapper>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.div`
  border-right: 1px solid lightgray;
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SidebarText = styled.span`
  margin-left: 10px;
  width: 50%;
`;

const TopSectionWrapper = styled.div``;

const SideButtonsWrapper = styled.div``;

const SidebarButtonItem = styled.div`
  display: flex;
  align-items: center;
  color: gray;
  padding: 5px 25px;
  cursor: pointer;
  :hover {
    background-color: rgb(20 58 165 / 22%);
  }
`;
