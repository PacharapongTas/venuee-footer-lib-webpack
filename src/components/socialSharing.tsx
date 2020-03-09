import * as React from "react";
import styled from "styled-components";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import { colors } from "../styles/mixins";

const IconColor = styled.a`
  color: ${colors.gray4} !important;
  &:hover {
    color: ${colors.blueVenuee} !important;
  }
`;

export const VenueEFacebookPage = () => {
  return (
    <IconColor href="https://www.facebook.com/venuee.co">
      <FaFacebookSquare title="facebook" size={26} />
    </IconColor>
  );
};

export const VenueEInstagram = () => {
  return (
    <IconColor href="https://www.instagram.com/venuee">
      <FaInstagram title="instagram" size={26} />
    </IconColor>
  );
};

export const VenueETwitter = () => {
  return (
    <IconColor href="https://twitter.com/VenueE_Co">
      <FaTwitterSquare title="twitter" size={26} />
    </IconColor>
  );
};
