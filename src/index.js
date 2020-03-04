import React from 'react'
import styled from 'styled-components'
import { colors, fontSizes, fontWeight, media, spaces }  from './mixins'

const TestCSS = styled.div`
    color: ${colors.blue3};
`;

const Mycomponent =() => (
    <TestCSS>
        <h1> This is YmtO !! </h1>
    </TestCSS>
)

export default Mycomponent