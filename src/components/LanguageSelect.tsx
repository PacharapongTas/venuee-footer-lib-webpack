import * as React from "react";
import styled from "styled-components";
import { colors, textLarge1 } from "../styles/mixins";

const SelectedStyle = styled.select`
  ${textLarge1};
  display: block;
  color: ${colors.black};
  background-color: ${colors.gray7};
`;

interface IProps {
  lng?: string;
  onLocaleClick: (locale: any) => void;
}

interface IState {
  language: string;
}

class LanguageSelect extends React.Component<IProps, IState> {
  state = {
    language: this.props.lng ? this.props.lng : "th"
  };

  render() {
    const { onLocaleClick } = this.props;
    const { language } = this.state;

    return (
      <SelectedStyle
        onChange={e => {
          onLocaleClick(e.target.value);
          this.setState({ language: e.target.value });
        }}
        value={language}
      >
        <option value="th">ภาษาไทย</option>
        <option value="en">English</option>
      </SelectedStyle>
    );
  }
}

export default LanguageSelect;
