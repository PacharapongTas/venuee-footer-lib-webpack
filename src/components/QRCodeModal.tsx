import React from "react";
import { LineQR } from "../modules/constants";
import styled from "styled-components";
import { spaces, colors, fontSizes, lineHeight } from "../styles/mixins";
import CloseButton from "./CloseButton";
import { COMMON_TH, COMMON_EN } from "../modules/common";

const ModalWrapper = styled.div`
  position: fixed;
  transition: all 0.5s;
  width: 400px;
  z-index: 101;
  height: 458px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`;

const Modal = styled.div`
  background-color: ${colors.white};
  position: relative;
`;

const ModalHeader = styled.div`
  background-color: ${colors.greenVenuee};
  border-bottom: 1px solid ${colors.secondary};
  font-size: ${fontSizes.large1};
  height: 65px;
  line-height: ${lineHeight.large4};
  padding: ${spaces.large1} ${spaces.large2};
  text-align: center;
  p {
    color: ${colors.white};
    margin: 0;
    padding: 0;
  }
`;

const ModalBody = styled.div`
  padding: ${spaces.large1} ${spaces.large1};
  text-align: center;
  p {
    color: ${colors.secondary};
  }
`;

const ModalFooterWrapper = styled.a`
  background-color: ${colors.greenVenuee};
  border-top: 1px solid ${colors.secondary};
  padding: 0;
  text-decoration: none !important;
  div {
    background-color: ${colors.greenVenuee};
    font-size: ${fontSizes.large1};
    text-align: center;
    padding-top: ${spaces.large1};
    color: ${colors.white};
    width: 100%;
    height: 60px;
  }
`;

const CloseButtonContainer = styled.div`
  position: absolute;
  z-index: 101;
  top: -${spaces.large1};
  right: -${spaces.large1};
`;

const StyledCloseButton = styled(CloseButton)`
  background: ${colors.white};
  border-radius: 50%;
  height: 40px;
  &:hover {
    opacity: 0.9;
  }
`;

const Overlay = styled.div`
  background-color: ${colors.black};
  opacity: 0.75;
  height: 100vh;
  position: fixed;
  transition: all 1.3s;
  width: 100vw;
  right: 0;
  bottom: 0;
  z-index: 100;
`;

interface IProps {
  lng: string;
  className: any;
  show: boolean;
  close: () => void;
}

const QRCodeModal = (props: IProps) => (
  <div>
    {props.show ? <Overlay onClick={props.close} /> : null}
    <ModalWrapper
      style={{
        transform: props.show ? "translateY(0vh)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0"
      }}
    >
      <CloseButtonContainer>
        <StyledCloseButton onClick={props.close} />
      </CloseButtonContainer>
      <Modal>
        <ModalHeader>
          <p>
            {props.lng === "th"
              ? COMMON_TH.line_modal_title
              : COMMON_EN.line_modal_title}
          </p>
        </ModalHeader>
        <ModalBody>
          <img src={LineQR} alt="Venuee Line QR image" />
          <p>Line: @venuee</p>
        </ModalBody>
        <ModalFooterWrapper href="line://ti/p/@venuee">
          <div>
            {props.lng === "th"
              ? COMMON_TH.line_modal_footer
              : COMMON_EN.line_modal_footer}
          </div>
        </ModalFooterWrapper>
      </Modal>
    </ModalWrapper>
  </div>
);

export default QRCodeModal;
