import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <NavBar>
      <Logo
        src="https://currys-ssl.cdn.dixons.com/grafx/images/logos/logo.png"
        alt="currys"
      />
      <SearchBar>
        <InputItem
          type="text"
          placeholder="Product name or item no."
        ></InputItem>
        <SearchButton>Search</SearchButton>
      </SearchBar>
      <LinkSection>
        <LinkButton href="#">
          <ImageLabel src="https://currys-ssl.cdn.dixons.com/css/themes/dory/icons/LocationPurpleBrightworld.svg" />
          <ButtonLabel>Stores</ButtonLabel>
        </LinkButton>
        <LinkButton href="#">
          <ImageLabel src="https://currys-ssl.cdn.dixons.com/css/themes/dory/icons/UserPurpleBrightworld.svg" />
          <ButtonLabel>Sign in</ButtonLabel>
        </LinkButton>
        <LinkButton href="#">
          <ImageLabel src="https://currys-ssl.cdn.dixons.com/css/themes/dory/icons/BasketPurpleBrightworld.svg" />
          <ButtonLabel>Basket</ButtonLabel>
        </LinkButton>
      </LinkSection>
    </NavBar>
  );
}

export default Header;

const NavBar = styled.div`
  display: flex;
  justify-content: space-around;
`;

const SearchBar = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 382px;
`;

const InputItem = styled.input`
  border-color: rgb(154, 174, 187);
  border-radius: 4px 0px 0px 4px;
  padding: 13px 40px 13px 20px;
  color: rgb(86, 112, 122);
  box-sizing: border-box;
  width: 100%;
  box-shadow: none;
  outline: none;
  margin: 0px;
  font-size: 13px;
  border: 1px solid rgb(204, 204, 204);

  &:focus {
    outline: 0;
    box-shadow: 0 0 5px rgba(22, 27, 122, 0.5);
  }

  &:focus::placeholder {
    color: transparent;
  }
`;

const SearchButton = styled.button`
  z-index: 99;
  width: auto;
  position: relative;
  margin-left: -1px;
  border-radius: 0px 4px 4px 0px;
  display: inline-block;
  height: auto;
  outline: 0px;
  overflow: visible;
  vertical-align: middle;
  text-align: center;
  white-space: nowrap;
  font-size: 14px;
  line-height: 1;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  padding: 13px 20px;
  border: 2px solid rgb(76, 18, 161);
  cursor: pointer;
  background-color: rgb(76, 18, 161);
  color: rgb(255, 255, 255);
  transition: background-color 0.1s ease 0s, border-color 0.1s ease 0s;
`;

const LinkSection = styled.div`
  display: flex;
  flex-direction: row;
`;

const LinkButton = styled.a`
  position: relative;
  flex: 1 1 0%;
  display: inline-flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  margin: -8px -12px -5px;
  padding: 8px 12px 5px;
  border: 1px solid transparent;
  color: rgb(76, 18, 161);
  margin: 20px 0;
  cursor: pointer;
  text-decoration: none;
`;

const ButtonLabel = styled.label`
  padding: 0px;
  width: auto;
  margin: 3px 0px 0px;
  line-height: 16px;
  cursor: pointer;
  font-size: 13px;
  display: block;
  white-space: nowrap;
  color: rgb(76, 18, 161);
`;

const Logo = styled.img`
  display: flex;
  align-self: center;
  width: 204px;
  height: 60px;
`;

const ImageLabel = styled.img`
  position: relative;
  height: 25px;
  width: 25px;
  fill: currentcolor;
  stroke: transparent;
`;
