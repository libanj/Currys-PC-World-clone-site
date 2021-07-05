import React from "react";
import styled from "styled-components";

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

const DropDownMenu = styled.div`
  display: none;
  background-color: rgb(255, 255, 255);
  position: absolute;
  left: 0px;
  top: 100%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  ${ListItem}:hover & {
    display: flex !important;
  }
`;

const DropDownList = styled.ul`
  background-color: rgb(255, 255, 255);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  list-style: none;
  padding: 10px 0px;
  margin: 0px;
  box-sizing: content-box;
`;

const DropDownListItem = styled.li`
  display: block;
`;

const DropDownLink = styled.a`
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

const DropDownImage = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: rgb(76, 18, 161);
  height: auto;
  width: auto;
  right: 10px;
`;

const CustomListItem = styled(ListItem)`
  position: static;
`;

const HelpAndServiceDropDownMenu = styled.div`
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

  ${ListItem}:hover & {
    display: block !important;
  }
`;

const HelpAndServiceTopLinks = styled.div`
  display: flex;
  background-color: rgb(250, 245, 255);
`;

const HelpAndServiceBottomLinks = styled.div`
  display: flex;
`;

const HelpAndServiceBlock = styled.div`
  flex: 1 1 0%;
  padding: 24px 40px 22px 0px;

  &:first-child {
    padding-left: 40px;
  }
`;

const HelpAndServiceLinkTitle = styled.a`
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

const HelpAndServiceList = styled.ul`
  list-style: none;
  padding: 0px;
`;

const HelpAndServiceListItem = styled.li`
  margin-bottom: 0px;
  padding: 0px 0px 15px;
`;

const HelpAndServiceLinkTag = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: rgb(76, 18, 161);

  &:hover {
    text-decoration: underline;
  }
`;

const HelpAndServiceEmptyList = styled.ul`
  display: flex;
  padding: 5px 0px 0px;
`;

const navigationLinks = [
  {
    name: "Appliance",
    links: [
      "Laundry",
      "Refrigeration",
      "Floorcare",
      "Cooking",
      "Microwaves",
      "Dishwashers",
      "Coffee machines",
      "Small kitchen appliances",
      "Health & beauty",
      "Fans, heating & air treatment",
      "Ironing",
      "Sewing machines",
      "Kitchen Builder",
    ],
  },
  {
    name: "TV & audio",
    links: [
      "Television",
      "TV accessories",
      "Digital and smart TV",
      "DVD, Blu-ray and home cinema",
      "Projectors",
      "Speakers and Hi-Fi systems",
      "Audio accessories",
      "Home cinema systems",
      "Headphones",
      "MP3 & CD players",
      "Radios",
      "Turntables",
      "Dictaphones",
    ],
  },
  {
    name: "Computing",
    links: [
      "Laptops",
      "iPads, Tablets & eReaders",
      "Desktop Pcs",
      "PC monitors",
      "Projectors",
      "Printers, scanners and ink",
      "Computer accessories",
      "Networking",
      "Data storage",
      "Components & upgrades",
      "Software",
      "Office supplies",
      "Laptop bags and cases",
    ],
  },
  {
    name: "Gaming",
    links: [
      "Console gaming",
      "PC gaming",
      "Components & upgrades",
      "Virtual reality",
      "Gaming Accessories",
      "Live gaming stores",
      "Broadband for gaming",
      "PC builder",
    ],
  },
  {
    name: "Cameras",
    links: [
      "All cameras",
      "Interchangeable lens cameras",
      "Compant and bridge cameras",
      "Photography accessories",
      "Camcorders & Drones",
    ],
  },
  {
    name: "Phones",
    links: [
      "Mobile phones",
      "Mobile phone accessories",
      "Home phones",
      "Mobile broadband",
      "Sat nav",
      "Smart tech",
      "Upgrade your broadband",
    ],
  },
  {
    name: "Smart Tech",
    links: [
      "Smart watches",
      "Smart phones",
      "Drones",
      "Smart sound",
      "Smart home",
    ],
  },
  {
    name: "Home & outdoor",
    links: [
      "Electric mobility",
      "Parent & Child",
      "Hobbies and toys",
      "Musical instruments",
      "Garden and outdoors",
      "Home accessories",
      "Cooking and baking",
      "office furniture",
      "Health & beauty",
      "Fans, heating & air treatment",
      "Ironing",
      "Sewing machines",
      "Kitchen Builder",
    ],
  },
];

const helpAndServiceTopNavLinks = [
  {
    title: "Help",
    links: [
      "Returns & order cancellations",
      "Track my delivery",
      "Contact us",
      "ShopLive",
    ],
  },
  {
    title: "Services",
    links: [
      "Repairs",
      "Track my repair",
      "Care and Repair",
      "Instant Replacement",
    ],
  },
  {
    title: "Finance & savings",
    links: ["Flexible credit", "Trade-in", "See more services"],
  },
];

const HelpAndServiceBottomNavLinks = [
  {
    title: "Coronavirus (Covid-19) update",
    links: [
      "Store",
      "Delivery & collection",
      "Home installation",
      "Care services",
    ],
  },
  {
    title: "For Business",
    links: ["Currys PC World Business", "Carphone Warehouse Business"],
  },
  {
    title: "TechTalk",
    links: ["TV advice", "Gaming news", "Computing", "Kitchen & home"],
  },
];

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

const helpAndServiceTopLinkItems = helpAndServiceTopNavLinks.map((navLinks) => (
  <HelpAndServiceBlock>
    <HelpAndServiceLinkTitle>{navLinks.title}</HelpAndServiceLinkTitle>
    <HelpAndServiceList>
      {navLinks.links.map((link) => (
        <HelpAndServiceListItem>
          <HelpAndServiceLinkTag>{link}</HelpAndServiceLinkTag>
          <HelpAndServiceEmptyList></HelpAndServiceEmptyList>
        </HelpAndServiceListItem>
      ))}
    </HelpAndServiceList>
  </HelpAndServiceBlock>
));

const helpAndServiceBottomLinkItems = HelpAndServiceBottomNavLinks.map(
  (navLinks) => (
    <HelpAndServiceBlock>
      <HelpAndServiceLinkTitle>{navLinks.title}</HelpAndServiceLinkTitle>
      <HelpAndServiceList>
        {navLinks.links.map((link) => (
          <HelpAndServiceListItem>
            <HelpAndServiceLinkTag>{link}</HelpAndServiceLinkTag>
            <HelpAndServiceEmptyList></HelpAndServiceEmptyList>
          </HelpAndServiceListItem>
        ))}
      </HelpAndServiceList>
    </HelpAndServiceBlock>
  )
);
