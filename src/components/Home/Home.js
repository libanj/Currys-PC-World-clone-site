import React from "react";
import {
  TopServices,
  ServiceTag,
  ServiceSection,
  ServiceImage,
  ServiceTitle,
  ServiceText,
  BannerSection,
  BannerTag,
  BannerImage,
  EuroContainer,
  GameOn,
  GameText,
  GameTitle,
  GameSubTitle,
  CustomSpan,
  GameTag,
  SmallText,
  GameImage,
  ShopDealsSection,
  CustomRowTitle,
  ProductsSection,
  ProductTag,
  ProductImage,
  ProductTitle,
  BlockRow,
  Block,
  ImageBlock,
  BlockDescription,
  BlockText,
  GreyBackground,
  TechDeliveredSection,
  TechDeliveredTitle,
  TechDeliveredRow,
  TechDelivered,
  TechDeliveredImage,
  TechDeliveredDescription,
  TechDeliveredText,
  EmailSignUpSection,
  EmailSignUpTag,
  CompanyLogoSection,
  CompanyLogoWrap,
  CompanyLogoList,
  CompanyLogoListItem,
  CompanyLogoImage,
  ConsoleBannerSection,
  ConsoleBannerImage,
  CreditMessageSection,
  CreditMessage,
} from "./HomeComponents";
import {
  topServices,
  shopDealsData,
  blockRowProducts,
  techDeliveredRow,
  companyLogoData,
} from "./HomeData";

function Home() {
  return (
    <div>
      <TopServices>{renderTopServiceSection}</TopServices>
      <BannerSection>
        <BannerTag href="#">
          <BannerImage src="https://currys-ssl.cdn.dixons.com/css/themes/Homepage/wk48/img/wk48-covid-banner-desktop.png"></BannerImage>
        </BannerTag>
      </BannerSection>
      <EuroContainer>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://currys-ssl.cdn.dixons.com/css/themes/Homepage/wk9/euros/coming-home.css?v5"
        ></link>
        <GameOn>
          <GameText>
            <GameTitle>It's Coming home!</GameTitle>
            <GameSubTitle>
              <CustomSpan>Get up to £300 off</CustomSpan> selected TVs and
              collect them today before the big game!
            </GameSubTitle>
            <GameTag href="#">Shop TV deals</GameTag>
            <GameTag href="#">Shop soundbars</GameTag>
            <GameTag href="#">Talk to an expert</GameTag>
            <SmallText>Subject to availability. T&Cs apply.</SmallText>
          </GameText>
          <GameImage src="https://currys-ssl.cdn.dixons.com/css/themes/Homepage/wk9/euros/its-coming-home-2.png?v5" />
        </GameOn>
      </EuroContainer>
      <ShopDealsSection>
        <CustomRowTitle>Shop deals</CustomRowTitle>
        <ProductsSection>{renderShopDealsSection}</ProductsSection>
      </ShopDealsSection>
      {renderBlockProducts}
      <GreyBackground>
        <TechDeliveredSection>
          <TechDeliveredTitle>Tech delivered</TechDeliveredTitle>
          <TechDeliveredRow>{renderTechDeliveredTags}</TechDeliveredRow>
          <EmailSignUpSection>
            <EmailSignUpTag>
              Sign-up to hear about the latest new product launches & unmissable
              offers
            </EmailSignUpTag>
          </EmailSignUpSection>
        </TechDeliveredSection>
      </GreyBackground>
      <CompanyLogoSection>
        <CompanyLogoWrap>
          <CompanyLogoList>{renderCompanyLogoListItems}</CompanyLogoList>
        </CompanyLogoWrap>
      </CompanyLogoSection>
      <ConsoleBannerSection>
        <ConsoleBannerImage
          src="https://currys-ssl.cdn.dixons.com/css/themes/Homepage/wk32/img/gaming-stock-full.png"
          alt="PS5 and Xbox Series X currently out of stock online. "
        />
      </ConsoleBannerSection>
      <CreditMessageSection>
        <CreditMessage>
          <strong>1. Buy now pay later: </strong>
          To avoid paying interest, pay full balance before your Buy Now Pay
          Later period ends. 24.9% APR representative (variable).
        </CreditMessage>
        <CreditMessage>
          <strong>2. Interest free credit: </strong>
          Requires a YourPlan flexible credit account where you get a credit
          limit that you can use for future purchases at 24.9% APR
          representative (variable).
        </CreditMessage>
      </CreditMessageSection>
    </div>
  );
}

export default Home;

const renderTopServiceSection = topServices.map((topService) => (
  <ServiceTag href={topService.link}>
    <ServiceSection>
      <ServiceImage alt={topService.alt} src={topService.src} />
      <ServiceTitle>
        {topService.title}
        {topService.span && <ServiceText>{topService.span}</ServiceText>}
      </ServiceTitle>
    </ServiceSection>
  </ServiceTag>
));

const renderShopDealsSection = shopDealsData.map((shopDeal) => (
  <ProductTag href={shopDeal.href}>
    <ProductImage src={shopDeal.src} />
    <ProductTitle>{shopDeal.title}</ProductTitle>
  </ProductTag>
));

const renderBlockProducts = blockRowProducts.map((rowProducts) => (
  <div>
    <CustomRowTitle>{rowProducts.title}</CustomRowTitle>
    <BlockRow>
      {rowProducts.productBlocks.map((product) => (
        <Block href={product.href}>
          <ImageBlock src={product.src} loading="lazy" />
          <BlockDescription>{product.description}</BlockDescription>
          <BlockText>{product.text}</BlockText>
        </Block>
      ))}
    </BlockRow>
  </div>
));

const renderTechDeliveredTags = techDeliveredRow.map((techDelivered) => (
  <TechDelivered href={techDelivered.href}>
    <TechDeliveredImage src={techDelivered.src} />
    <TechDeliveredDescription>
      {techDelivered.description}
    </TechDeliveredDescription>
    <TechDeliveredText>{techDelivered.text}</TechDeliveredText>
  </TechDelivered>
));

const renderCompanyLogoListItems = companyLogoData.map((companyLogo) => (
  <CompanyLogoListItem>
    <a
      target="_blank"
      rel="noreferrer"
      title={companyLogo.alt}
      href={companyLogo.href}
    >
      <figure>
        <CompanyLogoImage alt={companyLogo.alt} src={companyLogo.src} />
      </figure>
    </a>
  </CompanyLogoListItem>
));
