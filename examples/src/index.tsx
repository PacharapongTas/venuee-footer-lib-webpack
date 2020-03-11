import * as React from 'react';
import { render} from 'react-dom';
import FooterVenueE from '../../src';

interface IProps {
    language: string;
}

const App = ({language}: IProps) => (
    <FooterVenueE language={language}/>
);
render(<App language="th"/>, document.getElementById("root"));