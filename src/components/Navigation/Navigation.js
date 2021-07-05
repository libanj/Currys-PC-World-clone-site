import React from "react";

import {
  NavBar,
  ButtonList,
  ListItem,
  Link,
  Seperator,
  DealListItem,
  DropDownMenu,
  DropDownList,
  DropDownListItem,
  DropDownLink,
  DropDownImage,
  CustomListItem,
  HelpAndServiceDropDownMenu,
  HelpAndServiceTopLinks,
  HelpAndServiceBottomLinks,
  HelpAndServiceBlock,
  HelpAndServiceLinkTitle,
  HelpAndServiceList,
  HelpAndServiceListItem,
  HelpAndServiceLinkTag,
  HelpAndServiceEmptyList,
  DealDropDownMenu,
} from "./NavigationComponents";

import {
  navigationLinks,
  HelpAndServiceTopNavLinks,
  HelpAndServiceBottomNavLinks,
  DealLinks,
} from "./NavigationLinkData";

function Navigation() {
  return (
    <NavBar>
      <ButtonList>
        {navigationLinkItems}
        <Seperator />
        <CustomListItem>
          <Link href="#">Help & Services</Link>
          <HelpAndServiceDropDownMenu>
            <HelpAndServiceTopLinks>
              {helpAndServiceTopLinkItems}
            </HelpAndServiceTopLinks>
            <HelpAndServiceBottomLinks>
              {helpAndServiceBottomLinkItems}
            </HelpAndServiceBottomLinks>
          </HelpAndServiceDropDownMenu>
        </CustomListItem>
        <ListItem>
          <Link href="#">Brands</Link>
        </ListItem>
        <DealListItem>{DealLinkItems}</DealListItem>
      </ButtonList>
    </NavBar>
  );
}

export default Navigation;

const navigationLinkItems = navigationLinks.map((navigationLink) => (
  <ListItem>
    <Link href="#">{navigationLink.name}</Link>
    <DropDownMenu>
      <DropDownList>
        {navigationLink.links.map((link) => (
          <DropDownListItem>
            <DropDownLink href="#">
              {link}
              <DropDownImage src="https://currys-ssl.cdn.dixons.com/css/themes/dory/icons/ArrowRightPurpleBrightworld.svg"></DropDownImage>
            </DropDownLink>
          </DropDownListItem>
        ))}
      </DropDownList>
    </DropDownMenu>
  </ListItem>
));

const helpAndServiceTopLinkItems = HelpAndServiceTopNavLinks.map(
  (navigationLink) => (
    <HelpAndServiceBlock>
      <HelpAndServiceLinkTitle>{navigationLink.title}</HelpAndServiceLinkTitle>
      <HelpAndServiceList>
        {navigationLink.links.map((link) => (
          <HelpAndServiceListItem>
            <HelpAndServiceLinkTag>{link}</HelpAndServiceLinkTag>
            <HelpAndServiceEmptyList></HelpAndServiceEmptyList>
          </HelpAndServiceListItem>
        ))}
      </HelpAndServiceList>
    </HelpAndServiceBlock>
  )
);

const helpAndServiceBottomLinkItems = HelpAndServiceBottomNavLinks.map(
  (navigationLink) => (
    <HelpAndServiceBlock>
      <HelpAndServiceLinkTitle>{navigationLink.title}</HelpAndServiceLinkTitle>
      <HelpAndServiceList>
        {navigationLink.links.map((link) => (
          <HelpAndServiceListItem>
            <HelpAndServiceLinkTag>{link}</HelpAndServiceLinkTag>
            <HelpAndServiceEmptyList></HelpAndServiceEmptyList>
          </HelpAndServiceListItem>
        ))}
      </HelpAndServiceList>
    </HelpAndServiceBlock>
  )
);

const DealLinkItems = DealLinks.map((dealLink) => (
  <ListItem>
    <Link href="#">{dealLink.name}</Link>
    <DealDropDownMenu>
      <DropDownList>
        {dealLink.links.map((link) => (
          <DropDownListItem>
            <DropDownLink href="#">{link}</DropDownLink>
          </DropDownListItem>
        ))}
      </DropDownList>
    </DealDropDownMenu>
  </ListItem>
));
