import { createGlobalStyle } from "styled-components";
import JosefinSB from "../fonts/JosefinSans-SemiBold.ttf";
import JosefinR from "../fonts/JosefinSans-Regular.ttf";
import JosefinM from "../fonts/JosefinSans-Medium.ttf";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    @font-face {
        font-family: "JosefinSB";
        src: url(${JosefinSB})
    }

    @font-face {
        font-family: "JosefinR";
        src: url(${JosefinR})
    }

    @font-face {
        font-family: "JosefinM";
        src: url(${JosefinM})
    }


    a {
        text-decoration: none;
        color: ${({ theme: { text } }) => text};
    }

    body {
        background-color: ${({ theme: { main } }) => main};
    }

    button {
        cursor: pointer;
        border: none;

        &:focus {
            outline: none;
        }
    }

`;
