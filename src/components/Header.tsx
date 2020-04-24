import React from "react";
import styled from "styled-components";
import Flex, { FlexItem } from "typescript-styled-flex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChild, faCog, faBell } from "@fortawesome/free-solid-svg-icons";

//padding : direction 12, 3, 6, 9 or direction top buttom, left right
const Header = styled.header`
  height: 100px;
  background-color: #ecf0f1;
  padding: 0 40px;
  margin-bottom: 30px;
`;

//justify-content : center = center according to the axis
//align-items: center = center accoring to their space
const HeaderIcon = styled.span`
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  color: white;
  background-color: #3498db;
  border-radius: 50%;
  margin-right: 20px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`;

//justifyBetween = there is a ragular gap between every content
const Headpresenter = () => {
  return (
    <Header>
      <Flex full justifyBetween>
        <FlexItem>
          <h3>Anderson</h3>
        </FlexItem>

        <FlexItem>
          <HeaderIcon>
            <FontAwesomeIcon icon={faChild} size="1x" />
          </HeaderIcon>

          <HeaderIcon>
            <FontAwesomeIcon icon={faCog} size="1x" />
          </HeaderIcon>

          <HeaderIcon>
            <FontAwesomeIcon icon={faBell} size="1x" />
          </HeaderIcon>
        </FlexItem>
      </Flex>
    </Header>
  );
};

export default Headpresenter;
