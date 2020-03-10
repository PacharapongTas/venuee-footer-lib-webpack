import * as React from "react";
import styled from "styled-components";
import { MdPhone, MdEmail } from "react-icons/md";

import {
  colors,
  fontWeight,
  spaces,
  textNormal,
  media,
  lineHeight,
  textLarge1,
  grid
} from "./styles/mixins";

import { LineButton } from "./components/LineButton";

import LanguageSelect from "./components/LanguageSelect";

import { getSupplierPathName, DefaultLogo } from "./modules/constants";

import {
  VenueEFacebookPage,
  VenueEInstagram,
  VenueETwitter
} from "./components/socialSharing";

import {
  OCCASIONS_OPTIONS_TH,
  LOCATIONS_OPTIONS_TH,
  LEARNS_OPTIONS_TH
} from "./modules/layout/th";

import {
  OCCASIONS_OPTIONS_EN,
  LOCATIONS_OPTIONS_EN,
  COMPANYS_OPTIONS_EN,
  LEARNS_OPTIONS_EN
} from "./modules/layout/en";

import { SERVICE_OPTIONS_TH } from "./modules/vendor/th";
import { SERVICE_OPTIONS_EN } from "./modules/vendor/en";
import { COMMON_TH, COMMON_EN } from "./modules/common";
import UrlUtils from "./lib/UrlUtils";

const Container = styled.div`
  border-top: 1px solid ${colors.border};
  color: ${colors.secondary};
  padding: ${spaces.large4} ${spaces.large1};
  ${media.md`
		padding: ${spaces.large2} 0;
	`}
  ${textLarge1};
  font-weight: ${fontWeight.bold2};
`;

const H5 = styled.h5`
  ${textLarge1};
  font-weight: ${fontWeight.bold3};
  color: ${colors.primary};
  margin-bottom: ${spaces.large1};
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: center;
  > :first-child {
    width: 30%;
  }
  > :last-child {
    width: 70%;
  }
  ${media.md`
		padding: ${spaces.large3} ${spaces.large1};
		> :first-child {
			width: auto;
		}
		> :last-child {
			width: auto;
		}
	`}
`;

const Col = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  ${media.sm`
    flex: 0 0 50%;
    max-width: 50%;
  `}
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const VenueELogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.secondary};
  font-weight: ${fontWeight.bold1};
  margin-top: -${grid.gutterWidth / 4 + 2}px;
  padding: 0;
  width: 100%;
  > * {
    ${textNormal};
    margin-bottom: ${spaces.normal};
  }
  > :last-child {
    padding-bottom: ${spaces.small1};
  }
  ${media.sm`
		text-align: center;
	`}
`;

const VenueEAddress = styled.div`
  color: ${colors.primary};
  ${media.md`
		width: 300px;
	`}
`;

const VenueEName = styled.div`
  ${textLarge1};
  font-weight: ${fontWeight.bold2};
`;

const VenueELogo = styled.img`
  text-align: center;
  display: block;
  ${media.sm`
		margin: 0 auto;
	`}
`;

const TextCopyright = styled.span`
  color: ${colors.secondary};
`;

const ListContainer = styled.ul`
  padding-left: 0;
  list-style: none;
`;

const NeedHelpListContainer = styled.ul`
  margin-bottom: ${spaces.large2};
  padding-left: 0;
  list-style: none;
`;

const SpacePerItem = styled.li`
  line-height: ${lineHeight.normal};
`;

const TextListItem = styled.a`
  ${textNormal};
  font-weight: ${fontWeight.bold1};
  color: ${colors.secondary};
  text-decoration: none !important;

  :hover {
    color: ${colors.secondary};
  }
`;

const CopyRightTextItem = styled.a`
  ${textNormal};
  font-weight: ${fontWeight.bold1};
  color: ${colors.secondary};
  text-decoration: none !important;

  :hover {
    color: ${colors.secondary};
  }
`;

const ContactContainer = styled.div`
  margin-top: ${spaces.large2};
`;

const VenueETextLink = styled.span`
  ${textNormal};
  color: ${colors.blueVenuee3};
`;

const IconContent = styled.span`
  margin-top: ${spaces.small1};
  margin-right: ${spaces.normal};
`;

const TextPhoneNumber = styled.span`
  white-space: nowrap;
`;

const SocialLinkContainer = styled.div`
  display: flex;
  width: 100%;
  > :not(:last-child) {
    margin-right: ${spaces.small1};
  }
  ${media.sm`
		display:flex;
		justify-content: center;
    padding-left: ${spaces.large1};;
    padding-right: ${spaces.large1};;
		margin-bottom: ${spaces.large5};
	`}
`;

interface IProps {
  lng: string;
}

interface IState {
  lng: string;
}

class FooterVenueE extends React.PureComponent<IProps, IState> {
  state = {
    lng: this.props.lng ? this.props.lng : "th"
  };

  public onLocaleClick = async (locale: any) => {
    window.location.href = await UrlUtils.getChangeLangUrlByLocation(
      window.location.href,
      locale
    );
    this.setState({ lng: locale });
  };

  render() {
    const { lng } = this.state;
    const currentYear = new Date().getFullYear();
    return (
      <Container>
        <Row>
          <Content>
            <div className="col-md-12">
              <VenueELogoContainer>
                <VenueELogo
                  src={DefaultLogo}
                  alt="VenueE-logo"
                  title="VenueE-logo"
                  height="40"
                  width="100"
                />
                <VenueEAddress>
                  <span>
                    <VenueEName>
                      {lng === "th"
                        ? COMMON_TH.company_name
                        : COMMON_EN.company_name}
                    </VenueEName>
                    <div>{lng === "th" ? COMMON_TH.info : COMMON_EN.info}</div>
                  </span>
                </VenueEAddress>
                <TextCopyright>
                  <span>Copyright &copy; {currentYear} &nbsp;</span>
                  <CopyRightTextItem href="https://www.venuee.co">
                    <VenueETextLink>venuee.co</VenueETextLink>
                  </CopyRightTextItem>
                  <div>All right reserved.</div>
                </TextCopyright>
              </VenueELogoContainer>
              <SocialLinkContainer>
                <VenueEFacebookPage />
                <VenueEInstagram />
                <VenueETwitter />
              </SocialLinkContainer>
            </div>
          </Content>

          <Content>
            <Col className="col-6 col-md">
              <H5>Occasions</H5>
              <ListContainer>
                {lng === "th"
                  ? OCCASIONS_OPTIONS_TH().map((occasion, index) => (
                      <SpacePerItem key={index}>
                        <TextListItem href={occasion.value}>
                          {occasion.label}
                        </TextListItem>
                      </SpacePerItem>
                    ))
                  : OCCASIONS_OPTIONS_EN().map((occasion, index) => (
                      <SpacePerItem key={index}>
                        <TextListItem href={occasion.value}>
                          {occasion.label}
                        </TextListItem>
                      </SpacePerItem>
                    ))}
              </ListContainer>
            </Col>
            <Col className="col-6 col-md">
              <H5>{"Suppliers"}</H5>
              <ListContainer>
                {lng === "th"
                  ? SERVICE_OPTIONS_TH().map((supplier, index) => (
                      <SpacePerItem key={index}>
                        <TextListItem
                          href={`/${getSupplierPathName(supplier.slug)}`}
                        >
                          {supplier.label}
                        </TextListItem>
                      </SpacePerItem>
                    ))
                  : SERVICE_OPTIONS_EN().map((supplier, index) => (
                      <SpacePerItem key={index}>
                        <TextListItem
                          href={`/${getSupplierPathName(supplier.slug)}`}
                        >
                          {supplier.label}
                        </TextListItem>
                      </SpacePerItem>
                    ))}
              </ListContainer>
            </Col>
            <Col className="col-6 col-md">
              <H5>Locations</H5>
              <ListContainer>
                {lng === "th"
                  ? LOCATIONS_OPTIONS_TH().map((location, index) => (
                      <SpacePerItem key={index}>
                        <TextListItem href={location.value}>
                          {location.label}
                        </TextListItem>
                      </SpacePerItem>
                    ))
                  : LOCATIONS_OPTIONS_EN().map((location, index) => (
                      <SpacePerItem key={index}>
                        <TextListItem href={location.value}>
                          {location.label}
                        </TextListItem>
                      </SpacePerItem>
                    ))}
              </ListContainer>
            </Col>
            <Col className="col-6 col-md">
              <H5>Company</H5>
              <ListContainer>
                {COMPANYS_OPTIONS_EN().map((company, index) => (
                  <SpacePerItem key={index}>
                    <TextListItem href={company.value}>
                      {company.label}
                    </TextListItem>
                  </SpacePerItem>
                ))}
              </ListContainer>
            </Col>
            <Col className="col-6 col-md">
              <H5>Learn</H5>
              <ListContainer>
                {lng === "th"
                  ? LEARNS_OPTIONS_TH().map((learn, index) => (
                      <SpacePerItem key={index}>
                        <TextListItem href={learn.value}>
                          {learn.label}
                        </TextListItem>
                      </SpacePerItem>
                    ))
                  : LEARNS_OPTIONS_EN().map((learn, index) => (
                      <SpacePerItem key={index}>
                        <TextListItem href={learn.value}>
                          {learn.label}
                        </TextListItem>
                      </SpacePerItem>
                    ))}
              </ListContainer>
            </Col>
            <Col className="col-6 col-md">
              <H5>Need help?</H5>
              <NeedHelpListContainer>
                <SpacePerItem>
                  <TextListItem href="mailto:event@venuee.co">
                    <IconContent>
                      <MdEmail size={16} />
                    </IconContent>
                    &nbsp;event@venuee.co
                  </TextListItem>
                </SpacePerItem>
                <SpacePerItem>
                  <TextListItem href="tel:0972588563">
                    <TextPhoneNumber>
                      <IconContent>
                        <MdPhone size={16} />
                      </IconContent>
                      &nbsp;+66 (0)97 258 8563
                    </TextPhoneNumber>
                  </TextListItem>
                </SpacePerItem>
                <SpacePerItem>
                  <TextListItem href="tel:0972858536">
                    <TextPhoneNumber>
                      <IconContent>
                        <MdPhone size={16} />
                      </IconContent>
                      &nbsp;+66 (0)97 285 8536
                    </TextPhoneNumber>
                  </TextListItem>
                </SpacePerItem>
                <ContactContainer>
                  <SpacePerItem>
                    <TextListItem>
                      {lng === "th"
                        ? COMMON_TH.contact_us
                        : COMMON_EN.contact_us}
                    </TextListItem>
                  </SpacePerItem>
                  <SpacePerItem>
                    <LineButton lng={lng} />
                  </SpacePerItem>
                </ContactContainer>
              </NeedHelpListContainer>
              <ListContainer>
                <H5>
                  {lng === "th" ? COMMON_TH.language : COMMON_EN.language}
                </H5>
                <SpacePerItem>
                  <LanguageSelect
                    lng={this.props.lng}
                    onLocaleClick={this.onLocaleClick}
                  />
                </SpacePerItem>
              </ListContainer>
            </Col>
          </Content>
        </Row>
      </Container>
    );
  }
}

export default FooterVenueE;
