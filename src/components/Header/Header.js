import React from "react";

import {
  NavBar,
  SearchBar,
  InputItem,
  SearchButton,
  LinkSection,
  LinkButton,
  ButtonLabel,
  Logo,
  ImageLabel,
} from "./HeaderComponents";

function Header() {
  return (
    <NavBar>
      <Logo
        src="https://currys-ssl.cdn.dixons.com/grafx/images/logos/logo.png"
        alt="currys"
      />
      <SearchBar>
        <InputItem type="text" placeholder="Product name or item no." />
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
