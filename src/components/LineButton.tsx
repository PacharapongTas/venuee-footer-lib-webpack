import * as React from "react";
import { isMobile } from "react-device-detect";
import styled from "styled-components";
import { colors, fontWeight, textLarge1, spaces } from "../styles/mixins";

import {
  LineIcon
} from "../modules/constants";

import QRCodeModal from "./QRCodeModal";
import PrimaryButton from "./PrimaryButton";  

const VenueELineButton = styled(PrimaryButton)`
  ${textLarge1};
  font-weight: ${fontWeight.bold2};
  background-color: ${colors.greenLine};
  color: ${colors.white};
  border-radius: ${spaces.small1};
  padding-top: 0;
  padding-bottom: 0;
`;

const LineButtonWrapper = styled.div`
  margin-top: ${spaces.small1};
  .contact-us-p {
    color: ${colors.gray4};
  }
`;

const FooterLine = styled.div`
  display: flex;
  justify-content: center;
  img {
    height: 40px;
    margin-right: ${spaces.normal};
  }
  span {
    margin: auto;
  }
`;

interface IProps { 
  onTrackEvent?: any;
  lng: string;
}

interface IState {
  isShowing: boolean; 
}

export class LineButton extends React.PureComponent<IProps, IState> {
  state = {
    isShowing: false
  };

  ToggleModal = () => {
    if (isMobile) {
      window.location.href = "line://ti/p/@venuee";
    } else {
      this.setState({
        isShowing: !this.state.isShowing
      });
    }
    if (this.props.onTrackEvent) this.props.onTrackEvent();
  };

  render() {
    return (
      <React.Fragment>
        {(this.props.children && (
          <div onClick={this.ToggleModal}>{this.props.children}</div>
        )) || (
          <LineButtonWrapper>
            <div>
              <VenueELineButton onClick={this.ToggleModal}>
                <FooterLine>
                  <img src={LineIcon} alt="Line-icon" />
                  <span>&nbsp;@venuee</span>
                </FooterLine>
              </VenueELineButton>
            </div>
          </LineButtonWrapper>
        )}
        <QRCodeModal
          lng={this.props.lng}
          className="modal"
          show={this.state.isShowing}
          close={this.ToggleModal}
        />
      </React.Fragment>
    );
  }
}
