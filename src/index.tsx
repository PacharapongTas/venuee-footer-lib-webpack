import * as React from "react";
import styled from "styled-components";
import { colors } from "./mixins";

const TestCSS = styled.div`
  color: ${colors.red2};
`;

const MyComponent = () => (
  <TestCSS>
    <h1>Ma Name is YmtO !!!</h1>
  </TestCSS>
);

export default MyComponent;
