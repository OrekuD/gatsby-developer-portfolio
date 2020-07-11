import { createGlobalStyle } from "styled-components";
import JosefinSB from "../fonts/JosefinSans-SemiBold.ttf";
import JosefinR from "../fonts/JosefinSans-Regular.ttf";
import JosefinM from "../fonts/JosefinSans-Medium.ttf";
import JosefinT from "../fonts/JosefinSans-Thin.ttf";
import JosefinL from "../fonts/JosefinSans-Light.ttf";
import JosefinEL from "../fonts/JosefinSans-ExtraLight.ttf";

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
        font-family: "JosefinL";
        src: url(${JosefinL})
    }

    @font-face {
        font-family: "JosefinEL";
        src: url(${JosefinEL})
    }

    @font-face {
        font-family: "JosefinR";
        src: url(${JosefinR})
    }

    @font-face {
        font-family: "JosefinM";
        src: url(${JosefinM})
    }

    @font-face {
        font-family: "JosefinT";
        src: url(${JosefinT})
    }

    a {
        text-decoration: none;
        color: ${({ theme: { text } }) => text};
    }

    body {
        background-color: ${({ theme: { main } }) => main};
        color: ${({ theme: { text } }) => text};
    }

    button {
        cursor: pointer;
        border: none;

        &:focus {
            outline: none;
        }
    }

`;
