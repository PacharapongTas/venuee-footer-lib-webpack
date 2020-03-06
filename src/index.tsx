import * as React from 'react'
import styled from 'styled-components'
import { MdPhone, MdEmail } from 'react-icons/md'

import {
    colors,
	fontWeight,
	spaces,
	textNormal,
	media,
	lineHeight,
	textLarge1,
	grid,
} from './styles/mixins'

// import DefaultLogo from './assets/venuee-logo.png'
import { LineButton } from './components/LineButton'

// import { withI18next, InjectedI18nextProps } from '../lib/withI18next'
// import LanguageSelect from './LanguageSelect'
import { SERVICE_OPTIONS, getSupplierPathName } from './modules/vendor/constants'
import {
	OCCASIONS_OPTIONS,
	LOCATIONS_OPTIONS,
	COMPANYS_OPTIONS,
	LEARNS_OPTIONS,
} from './modules/layout/constants'
// import { VenueEFacebookPage, VenueEInstagram, VenueETwitter } from './socialSharing'

const DefaultLogo = 'data:image/png;base64,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'

const Container = styled.div`
	border-top: 1px solid ${colors.border};
	color: ${colors.secondary};
	padding: ${spaces.large4} 0;
	${media.md`
		padding: ${spaces.large2} 0;
	`}
	${textLarge1};
	font-weight: ${fontWeight.bold2};
`

const H5 = styled.h5`
	${textLarge1};
	font-weight: ${fontWeight.bold3};
	color: ${colors.primary};
	margin-bottom: ${spaces.large1};
`

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
`

const Content = styled.div`
	display: flex;
	flex-wrap: wrap;
`

const VenueELogoContainer = styled.div`
	display: flex;
	flex-direction: column;
	color: ${colors.secondary};
	font-weight: ${fontWeight.bold1};
	margin-top: -${grid.gutterWidth / 4 + 2}px;
	padding: 0 ${spaces.large1};
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
`

const VenueEAddress = styled.div`
	color: ${colors.primary};
	${media.md`
		width: 300px;
	`}
`

const VenueEName = styled.div`
	${textLarge1};
	font-weight: ${fontWeight.bold2};
`

const VenueELogo = styled.img`
	text-align: center;
	display: block;
	${media.sm`
		margin: 0 auto;
	`}
`

const TextCopyright = styled.span`
	color: ${colors.secondary};
`

const ListContainer = styled.ul`
	padding-left: 0;
	list-style: none;
`

const NeedHelpListContainer = styled.ul`
	margin-bottom: ${spaces.large2};
	padding-left: 0;
	list-style: none;
`

const SpacePerItem = styled.li`
	margin-bottom: ${spaces.small1};
	line-height: ${lineHeight.normal};
`

const TextListItem = styled.a`
	${textNormal};
	font-weight: ${fontWeight.bold1};
	color: ${colors.secondary};
	:hover {
		color: ${colors.secondary};
	}
`

const ContactContainer = styled.div`
	margin-top: ${spaces.large2};
`

const VenueETextLink = styled.span`
	${textNormal};
	color: ${colors.blueVenuee3};
`

const IconContent = styled.span`
	margin-right: ${spaces.normal};
`

const TextPhoneNumber = styled.span`
	white-space: nowrap;
`

const SocialLinkContainer = styled.div`
	display: flex;
	padding: 0 ${spaces.large1};
	width: 100%;
	> :not(:last-child) {
		margin-right: ${spaces.small1};
	}
	${media.sm`
		display:flex;
		justify-content: center;
		margin-bottom: ${spaces.large5};
	`}
`

class FooterVenueE extends React.PureComponent {
	render() {
		// const { t } = this.props
		const currentYear = new Date().getFullYear()
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
										<VenueEName>{('venuee-address.company-name')}</VenueEName>
										<div>{('venuee-address.info')}</div>
									</span>
								</VenueEAddress>
								<TextCopyright>
									<span>Copyright &copy; {currentYear} &nbsp;</span>
									<TextListItem href="https://www.venuee.co">
										<VenueETextLink>venuee.co</VenueETextLink>
									</TextListItem>
									<div>All right reserved.</div>
								</TextCopyright>
							</VenueELogoContainer>
							<SocialLinkContainer>
								{/* <VenueEFacebookPage />
								<VenueEInstagram />
								<VenueETwitter /> */}
							</SocialLinkContainer>
						</div>
					</Content>

					<Content>
						<div className="col-6 col-md">
							<H5>Occasions</H5>
							<ListContainer>
								{OCCASIONS_OPTIONS().map((occasion, index) => (
									<SpacePerItem key={index}>
										<TextListItem href={occasion.value}>{occasion.label}</TextListItem>
									</SpacePerItem>
								))}
							</ListContainer>
						</div>
						<div className="col-6 col-md">
							<H5>{('suppliers')}</H5>
							<ListContainer>
								{SERVICE_OPTIONS().map((supplier, index) => (
									<SpacePerItem key={index}>
										<TextListItem href={`/${getSupplierPathName(supplier.slug)}`}>
											{supplier.label}
										</TextListItem>
									</SpacePerItem>
								))}
							</ListContainer>
						</div>
						<div className="col-6 col-md">
							<H5>Locations</H5>
							<ListContainer>
								{LOCATIONS_OPTIONS().map((location, index) => (
									<SpacePerItem key={index}>
										<TextListItem href={location.value}>{location.label}</TextListItem>
									</SpacePerItem>
								))}
							</ListContainer>
						</div>
						<div className="col-6 col-md">
							<H5>Company</H5>
							<ListContainer>
								{COMPANYS_OPTIONS().map((company, index) => (
									<SpacePerItem key={index}>
										<TextListItem href={company.value}>{company.label}</TextListItem>
									</SpacePerItem>
								))}
							</ListContainer>
						</div>
						<div className="col-6 col-md">
							<H5>Learn</H5>
							<ListContainer>
								{LEARNS_OPTIONS().map((learn, index) => (
									<SpacePerItem key={index}>
										<TextListItem href={learn.value}>{learn.label}</TextListItem>
									</SpacePerItem>
								))}
							</ListContainer>
						</div>
						<div className="col-6 col-md">
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
										<TextListItem>{('contact-us')}</TextListItem>
									</SpacePerItem>
									<SpacePerItem>
										<LineButton />
									</SpacePerItem>
								</ContactContainer>
							</NeedHelpListContainer>
							<ListContainer>
								<H5>{('language')}</H5>
								<SpacePerItem>
									{/* <LanguageSelect /> */}
								</SpacePerItem>
							</ListContainer>
						</div>
					</Content>
				</Row>
			</Container>
		)
	}
}

export default FooterVenueE
