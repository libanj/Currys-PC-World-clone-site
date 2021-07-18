import React from "react";

import { ReactComponent as Map } from "./united_kingdom_image.svg";

import {
  FooterSection,
  FooterNavigation,
  FooterColumn,
  FooterLastColumn,
  FooterListItem,
  FooterTag,
  FindStoresParagraph,
  FindStoresLink,
  MapMarkerIcon,
  MapMarkerText,
  MapImageSection,
} from "./FooterComponent";

import { FooterLinks } from "./FooterData";

function Footer() {
  return (
    <FooterSection>
      <FooterNavigation>
        {renderFooterColumns}
        <FooterLastColumn>
          <h4>Store finder</h4>
          <FindStoresParagraph>
            To show you Currys PC World stores local to you, all we need is your
            postcode.
          </FindStoresParagraph>
          <FindStoresLink>
            <MapMarkerIcon class="fas fa-map-marker-alt"></MapMarkerIcon>
            <MapMarkerText>
              <h4>Find stores</h4>
            </MapMarkerText>
          </FindStoresLink>
          <MapImageSection>
            <Map />
          </MapImageSection>
        </FooterLastColumn>
      </FooterNavigation>
    </FooterSection>
  );
}

export default Footer;

const renderFooterColumns = FooterLinks.map((footerLink) => (
  <FooterColumn>
    <FooterListItem>
      <h5 style={{ fontSize: 1 + "em" }}>{footerLink.header}</h5>
    </FooterListItem>
    {footerLink.links.map((link) => (
      <FooterListItem>
        <FooterTag href={link.href}>{link.tag}</FooterTag>
      </FooterListItem>
    ))}
  </FooterColumn>
));
