import styled from "styled-components";

export const FooterSection = styled.div`
  overflow: hidden;
  padding-top: 5px;
  padding-bottom: 0;
  border-top: 1px solid #ccc;
  position: relative;
  clear: both;
  z-index: 1;
`;

export const FooterNavigation = styled.nav`
  display: block;
  padding: 0;
  margin: 0;
  color: #666;
  left: 0;
  width: 100% !important;
  clear: both;
  position: relative;
  height: 1%;
`;

export const FooterColumn = styled.ul`
  display: inline;
  float: left;
  width: 310px;
  margin-left: 0;
  list-style: none;
  list-style-image: none;
  margin: 0;
  padding: 0;
`;

export const FooterLastColumn = styled.div`
  position: relative;
  margin-top: -6px;
  border-left: 1px solid #ccc;
  width: 23.25%;
  height: 141px;
  padding: 5px 10px 10px 10px;
  background: #fbfbfb;
  margin-left: 0;
  display: inline;
  float: left;
`;

export const FooterListItem = styled.li`
  margin-bottom: 0.25em;
`;

export const FooterTag = styled.a`
  font-size: 12px;
  display: inline-block;
  padding: 2px 0;
  color: #666;
`;

export const FindStoresParagraph = styled.p`
  width: 65%;
  margin-bottom: 1em;
`;

export const FindStoresLink = styled.a`
  padding: 10px;
  background: #ebebeb;
  font-size: 12px;
  display: inline-block;
  color: #666;
  text-decoration: none;
`;

export const MapMarkerIcon = styled.i`
  font-size: 16px;
  margin-top: -2px;

  &:before {
    vertical-align: -10%;
    font-size: 1.333333333333333em;
  }
`;

export const MapMarkerText = styled.span`
  text-decoration: none;
`;

export const MapImageSection = styled.div`
  position: absolute;
  bottom: 2.1em;
  right: 1em;
  z-index: 0;
  opacity: 0.5;
  height: 120px;
  width: 75px;
`;
