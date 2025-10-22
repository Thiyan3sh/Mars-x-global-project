import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`

    @font-face {
        font-family: "Motiva Sans Light";
        src: url("/fonts/Motiva-Sans-Light.ttf") format("truetype");
        font-style: normal;
    }

    @font-face {
        font-family: "Motiva Sans Bold";
        src: url("/fonts/Motiva-Sans-Bold.ttf") format("truetype");
        font-style: normal;
    }


    body,
    html,
    a {
        font-family: 'Motiva Sans Light', sans-serif;
    }


    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: linear-gradient(135deg, #000000 0%, #424242 50%, #B0BEC5 100%);
        overflow-x: hidden;
    }

    a:hover {
        color: #B0BEC5;
    }

    input,
    textarea {
        border-radius: 4px;
        border: 0;
        background: rgba(255, 255, 255, 0.1);
        transition: all 0.3s ease-in-out;
        outline: none;
        width: 100%;
        padding: 1rem 1.25rem;
        color: #ffffff;

        :focus-within {
            background: rgba(255, 255, 255, 0.2);
            box-shadow: #424242 0px 0px 0px 1px;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Motiva Sans Bold', serif;
        color: #ffffff;
        font-size: 56px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }

        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    }

    p {
        color: #ffffff;
        font-size: 21px;
        line-height: 1.41;
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #ffffff;

        :hover {
            color: #B0BEC5;
        }
    }
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
    }
`;
