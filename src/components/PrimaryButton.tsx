import * as React from "react";
import { textNormal, colors, spaces } from "../styles/mixins";
import styled from "styled-components";

interface IButton {
  size?: string;
}

const Button = styled.button<IButton>`
  padding: ${spaces.normal} 12px;
  background: ${colors.blueCTA};
  color: white;
  text-align: center;
  border: none;
  ${textNormal};
  cursor: pointer;
  border-radius: ${spaces.small2};

  ${props =>
    props.size === "lg" &&
    `
		padding: 12px;
	`} &:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);
  }
`;

type Props = {
  size?: "sm" | "lg";
  type?: any;
  onClick?: Function;
};

export default class PrimaryButton extends React.PureComponent<Props> {
  render() {
    return (
      <Button
        type={this.props.type ? this.props.type : "button"}
        size={this.props.size ? this.props.size : "sm"}
        {...(this.props as React.HTMLAttributes<HTMLButtonElement>)}
      />
    );
  }
}
