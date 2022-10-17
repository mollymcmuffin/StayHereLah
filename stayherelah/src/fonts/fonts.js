import { createGlobalStyle } from "styled-components";

import MilkyCoffee from "./milky_coffee/Milky Coffee.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'Font Name';
        src: local('Font Name'), local('FontName'),
        url(${MilkyCoffee}) format('ttf'),
        
        font-weight: 300;
        font-style: normal;
    }
`;
