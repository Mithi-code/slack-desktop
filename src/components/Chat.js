import { InfoOutlined, StarBorderOutlined } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import ChatInput from "./ChatInput";
import { selectRoomId} from '../store/appSlice'

const Chat = () => {
  const roomId = useSelector(selectRoomId)
  return (
    <ChatContainer>
      <>
        <Header>
          <HeaderLeft>
            <h4>
              <strong>#Room-name</strong>
            </h4>
            <StarBorderOutlined />
          </HeaderLeft>
          <HeaderRight>
            <p>
              <InfoOutlined />
              Details
            </p>
          </HeaderRight>
        </Header>
        <ChatMessages>

        </ChatMessages>
        <ChatInput 
           channelId = {roomId}
        />
      </>
    </ChatContainer>
  );
};

export default Chat;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;

const ChatMessages = styled.div`


`
;

const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  > p > .MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size: 16px;
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-left: 20px;
  }

  > h4 > .MuiSvgIcon-root {
    margin-left: 10px;
    font-size: 18px;
  }
`;

const ChatContainer = styled.div`
  flex: 0%.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;
