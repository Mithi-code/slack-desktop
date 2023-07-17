/* eslint-disable array-callback-return */
import React from "react";
import { styled } from "styled-components";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import SidebarOptions from "./SidebarOptions";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "../firebase";

const Sidebar = () => {
  const [channels, loading, error] = useCollection(collection(db, 'rooms'))
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Mithlesh's slack</h2>
          <h3>
            <FiberManualRecordIcon />
            Mithlesh Kumar
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>
      <SidebarOptions Icon={InsertCommentIcon} title="Threads" />
      <SidebarOptions Icon={InboxIcon} title="Mentions & Reactions" />
      <SidebarOptions Icon={DraftIcon} title="Saved items" />
      <SidebarOptions Icon={BookmarkBorderIcon} title="Channel browser" />
      <SidebarOptions Icon={PeopleAltIcon} title="People & user groups" />
      <SidebarOptions Icon={AppsIcon} title="Apps" />
      <SidebarOptions Icon={FileCopyIcon} title="File browser" />
      <SidebarOptions Icon={ExpandLessIcon} title="Show less" />
      <hr></hr>
      <SidebarOptions Icon={ExpandMoreIcon} title="Show more" />
      <hr></hr>
      <SidebarOptions Icon={AddIcon} addChannelOption title="Add channel" />
      {channels?.docs.map((doc) => {
         return <>
          <SidebarOptions
          key={doc.id}
          id={doc.id}
          title= {doc.data().name}
        />
         </>
      })}
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  color: #fff;
  background-color: var(--slack-color);
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  padding-top: 60px;

  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: #fff;
    border-radius: 999px;
  }
`;

const SidebarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;
