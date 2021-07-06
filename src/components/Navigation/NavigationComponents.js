import styled from "styled-components";

export const NavBar = styled.div`
  min-height: 45px;
  background-color: rgb(76, 18, 161);
  padding: 0px 20px;
`;

export const ButtonList = styled.ul`
  display: flex;
  position: relative;
  justify-content: space-between;
  list-style: none;
  margin: 0px auto;
  max-width: 1240px;
  padding: 0px;
`;

export const ListItem = styled.li`
  position: relative;
  color: rgb(255, 255, 255);
`;

export const Link = styled.a`
  display: block;
  font-size: 14px;
  font-weight: normal;
  padding: 14px 10px;
  color: inherit;
  cursor: pointer;
  text-decoration: none;

  ${ListItem}:hover & {
    text-decoration: none;
    background-color: rgb(255, 255, 255);
    color: rgb(76, 18, 161);
    font-weight: bold;
  }
`;

export const Seperator = styled.li`
  flex: 1 1 0%;
`;

export const DealListItem = styled(ListItem)`
  background-color: rgb(229, 0, 109);
`;

export const DropDownMenu = styled.div`
  display: none;
  background-color: rgb(255, 255, 255);
  position: absolute;
  left: 0px;
  top: 100%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  z-index: 2;

  ${ListItem}:hover & {
    display: flex !important;
  }
`;

export const DropDownList = styled.ul`
  background-color: rgb(255, 255, 255);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  list-style: none;
  padding: 10px 0px;
  margin: 0px;
  box-sizing: content-box;
`;

export const DropDownListItem = styled.li`
  display: block;
`;

export const DropDownLink = styled.a`
  position: relative;
  white-space: nowrap;
  display: block;
  font-size: 13px;
  padding: 6px 35px 6px 20px;
  color: rgb(76, 18, 161);
  min-width: 180px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    font-weight: 600;
    text-decoration: none;
    background-color: rgb(250, 245, 255);
    color: rgb(76, 18, 161);
  }
`;

export const DropDownImage = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: rgb(76, 18, 161);
  height: auto;
  width: auto;
  right: 10px;
`;

export const CustomListItem = styled(ListItem)`
  position: static;
`;

export const HelpAndServiceDropDownMenu = styled.div`
  display: none;
  position: absolute;
  background-color: rgb(255, 255, 255);
  list-style: none;
  right: 0px;
  top: 100%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  max-width: 715px;
  width: 100%;
  overflow: hidden;
  z-index: 2;

  ${ListItem}:hover & {
    display: block !important;
  }
`;

export const HelpAndServiceTopLinks = styled.div`
  display: flex;
  background-color: rgb(250, 245, 255);
`;

export const HelpAndServiceBottomLinks = styled.div`
  display: flex;
`;

export const HelpAndServiceBlock = styled.div`
  flex: 1 1 0%;
  padding: 24px 40px 22px 0px;

  &:first-child {
    padding-left: 40px;
  }
`;

export const HelpAndServiceLinkTitle = styled.a`
  display: block;
  position: relative;
  color: rgb(33, 48, 56);
  font-size: inherit;
  width: 195px;
  font-weight: 600;
  margin-bottom: 16px;
  pointer-events: none;
  cursor: pointer;
  text-decoration: none;
`;

export const HelpAndServiceList = styled.ul`
  list-style: none;
  padding: 0px;
`;

export const HelpAndServiceListItem = styled.li`
  margin-bottom: 0px;
  padding: 0px 0px 15px;
`;

export const HelpAndServiceLinkTag = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: rgb(76, 18, 161);

  &:hover {
    text-decoration: underline;
  }
`;

export const HelpAndServiceEmptyList = styled.ul`
  display: flex;
  padding: 5px 0px 0px;
`;

export const DealDropDownMenu = styled.div`
  display: none;
  left: auto;
  right: 0px;
  background-color: rgb(255, 255, 255);
  position: absolute;
  top: 100%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  z-index: 2;

  ${ListItem}:hover & {
    display: block !important;
  }
`;
