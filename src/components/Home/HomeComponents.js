import styled from "styled-components";

export const TopServices = styled.section`
  font-family: "CurrysSans", sans-serif;
  font-size: 15px;
  font-weight: 500;
  width: 100%;
  max-width: 1240px;
  display: flex;
  justify-content: space-between;
  overflow: visible;
  margin-top: 10px;
`;

export const ServiceTag = styled.a`
  display: flex;
  flex-basis: 24%;
  text-decoration: none;
  padding: 10px;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  background: #fff;
`;

export const ServiceSection = styled.figure`
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

export const ServiceImage = styled.img`
  height: 30px;
  margin-right: 15px;
  width: auto;
  max-width: 100%;
  box-sizing: border-box;
`;

export const ServiceTitle = styled.h5`
  margin: 0;
  line-height: 1em;
  font-weight: 500;
  font-size: 1em;
  color: #4c12a1;
  box-sizing: border-box;
`;

export const ServiceText = styled.span`
  display: block;
  font-size: 0.8em;
  line-height: 1em;
  font-weight: 500;
  color: #4c12a1;
`;

export const BannerSection = styled.section`
  font-size: 15px;
  font-weight: 500;
  display: block;
`;

export const BannerTag = styled.a`
  padding: 0px;
  display: block;
  margin: 10px 0;
  text-decoration: none;
  box-sizing: border-box;
`;

export const BannerImage = styled.img`
  max-width: 100%;
  box-sizing: border-box;
`;

export const EuroContainer = styled.section`
  display: block;
  background: #f9d2e5;
  background-image: url(https://currys-ssl.cdn.dixons.com/css/themes/Homepage/wk9/euros/pink-bg.png);
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  margin-left: calc(-1 * ((100vw - 100%) / 2));
  padding: 30px 0;
  margin-bottom: 15px;
`;

export const GameOn = styled.div`
  max-width: 1240px;
  margin: 10px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GameText = styled.div`
  text-align: center;
  color: #4c12a1;
  font-family: CurrysSans;
  padding: 25px;
`;

export const GameTitle = styled.h3`
  font-size: 65px;
  margin-bottom: 10px;
  text-align: center;
  color: #4c12a1;
`;

export const GameSubTitle = styled.h4`
  font-size: 26px;
  width: 80%;
  font-weight: normal;
  margin: 0 auto 15px auto;
  color: #4c12a1;
`;

export const CustomSpan = styled.span`
  color: #e5006d;
`;

export const GameTag = styled.a`
  line-height: 16px;
  text-decoration: none;
  background: #ffffff;
  border: 2px solid #4c12a1;
  border-radius: 22px;
  font-size: 13px;
  font-weight: 500;
  color: #4c12a1;
  text-align: center;
  padding: 10px 30px;
  margin: 5px;
  display: inline-block;
  vertical-align: middle;
  min-height: 18px;
  min-width: 20px;
  transition: border 0.2s ease;
  box-shadow: inset 0 1px 0 rgb(255 255 255 / 20%),
    0 1px 0 rgb(255 255 255 / 20%);
  cursor: pointer;
  position: static;
`;

export const SmallText = styled.small`
  display: block;
  margin-top: 5px;
  color: #4c12a1;
`;

export const GameImage = styled.img`
  width: 40%;
`;

export const ShopDealsSection = styled.section`
  margin-top: 0px;
  margin-bottom: 25px;
  padding: 25px 0;
  box-sizing: border-box;
  font-size: 15px;
  font-weight: 500;
`;

export const CustomRowTitle = styled.h2`
  font-family: "CurrysSans", sans-serif;
  display: flex;
  width: 100vw;
  margin-left: calc(-1 * ((100vw - 100%) / 2));
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 500;
  font-size: 22px;
  color: #213038;
  letter-spacing: 0.09px;
  box-sizing: border-box;

  &:before {
    content: "";
    border-top: 1px solid #56707a;
    margin: 0 20px 0 0;
    flex: 1 0 20px;
  }

  &:after {
    content: "";
    border-top: 1px solid #56707a;
    margin: 0 0 0 20px;
    flex: 1 0 20px;
  }
`;

export const ProductsSection = styled.div`
  padding: 0px;
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  font-size: 15px;
  font-weight: 500;
`;

export const ProductTag = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease-out;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ProductImage = styled.img`
  max-width: 100%;
  max-height: 125px;
  padding-top: 20px;
  box-sizing: border-box;
`;

export const ProductTitle = styled.span`
  font-size: 16px;
  color: #213038;
  letter-spacing: 0.06px;
  text-align: center;
  margin: 15px 0 0 0;
  box-sizing: border-box;
`;

export const BlockRow = styled.section`
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 0px 0px !important;
  margin-top: 15px;
  margin-bottom: 15px;
  box-sizing: border-box;
  font-size: 15px;
  font-weight: 500;
`;

export const Block = styled.a`
  flex: 0 0 23%;
  text-decoration: none;
  margin: 10px;
  box-sizing: border-box;
  color: #4855a0;
  font-size: 15px;
  font-weight: 500;
`;

export const ImageBlock = styled.img`
  background: none;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.231;
`;

export const BlockDescription = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: #213038;
  letter-spacing: 0.06px;
  text-align: center;
  margin: 0;
  padding-top: 10px;
  box-sizing: border-box;
`;

export const BlockText = styled.h3`
  color: #e5006d;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.06px;
  text-align: center;
  margin: 0;
  font-weight: 600;
  box-sizing: border-box;
`;

export const GreyBackground = styled.section`
  display: block;
  width: 100vw;
  margin-left: calc(-1 * ((100vw - 100%) / 2));
  background: #f2f3f4;
`;

export const TechDeliveredSection = styled.section`
  display: block;
  margin-top: 10px;
  margin-bottom: 0px;
  padding: 25px 0;
  box-sizing: border-box;
  font-size: 15px;
  font-weight: 500;
`;

export const TechDeliveredTitle = styled.h2`
  font-size: 22px;
  color: #213038;
  letter-spacing: 0.09px;
  text-align: center;
  padding-top: 10px;
  box-sizing: border-box;
`;

export const TechDeliveredRow = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  font-size: 15px;
  font-weight: 500;
`;

export const TechDelivered = styled(Block)`
  flex: 0 0 30%;
`;

export const TechDeliveredImage = styled(ImageBlock)`
  min-height: 380px;
  background-color: white;
  border-radius: 10px;
`;

export const TechDeliveredDescription = styled(BlockDescription)``;

export const TechDeliveredText = styled(BlockText)``;

export const EmailSignUpSection = styled.div`
  max-width: 1240px;
  margin: 20px auto 0 auto;
  background: #4c12a1;
  padding: 13px;
  border-radius: 10px;
  text-align: center;
  color: white;
  font-weight: bold;
  box-sizing: border-box;
`;

export const EmailSignUpTag = styled.a`
  text-decoration: none;
  color: inherit;
  box-sizing: border-box;
`;

export const CompanyLogoSection = styled.section`
  display: block;
  font-size: 15px;
  font-weight: 500;
  overflow: hidden;
  margin-top: 20px;
`;

export const CompanyLogoWrap = styled.div`
  display: block;
`;

export const CompanyLogoList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  overflow: hidden;
  padding: 0px;
  box-sizing: border-box;
`;

export const CompanyLogoListItem = styled.li`
  float: left;
  width: 12%;
  line-height: 50px;
  box-sizing: border-box;

  &:first {
    margin: 0px;
  }
`;

export const CompanyLogoImage = styled.img`
  width: 150px;
  margin: auto;
  max-width: 100%;
  box-sizing: border-box;
`;
