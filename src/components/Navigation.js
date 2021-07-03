import React from "react";
import styled from "styled-components";

function Navigation() {
  return (
    <NavBar>
      <ButtonList>
        <ListItem>
          <Link href="#">Appliances</Link>
        </ListItem>
        <ListItem>
          <Link href="#">TV & Audio</Link>
        </ListItem>
        <ListItem>
          <Link href="#">Computing</Link>
        </ListItem>
        <ListItem>
          <Link href="#">Gaming</Link>
        </ListItem>
        <ListItem>
          <Link href="#">Cameras</Link>
        </ListItem>
        <ListItem>
          <Link href="#">Phone</Link>
        </ListItem>
        <ListItem>
          <Link href="#">Smart Tech</Link>
        </ListItem>
        <ListItem>
          <Link href="#">Home & Outdoor</Link>
        </ListItem>
        <Seperator />
        <ListItem>
          <Link href="#">Help & Services</Link>
        </ListItem>
        <ListItem>
          <Link href="#">Brands</Link>
        </ListItem>
        <DealLink>
          <Link href="#">Deals</Link>
        </DealLink>
      </ButtonList>
    </NavBar>
  );
}

export default Navigation;

const NavBar = styled.div`
  min-height: 45px;
  background-color: rgb(76, 18, 161);
  padding: 0px 20px;
`;

const ButtonList = styled.ul`
  display: flex;
  position: relative;
  justify-content: space-between;
  list-style: none;
  margin: 0px auto;
  max-width: 1240px;
  padding: 0px;
`;

const ListItem = styled.li`
  position: relative;
  color: rgb(255, 255, 255);
`;

const Link = styled.a`
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

const Seperator = styled.li`
  flex: 1 1 0%;
`;

const DealLink = styled(ListItem)`
  background-color: rgb(229, 0, 109);
`;
