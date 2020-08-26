import styled, {createGlobalStyle} from 'styled-components';

import * as colors from '../config/collors';

import 'react-toastify/dist/ReactToastify.css';

export default  createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
    }

    body {
        font-family: sans-serif;
        background: ${colors.primaryDarkCollor};
    }

    html, body, #root{
        height: 100%;
    }

    button {
        cursor: pointer;
        background: ${colors.primaryCollor};
        border: none;
        color: #fff;
        padding: 10px 20px;
        border-radius: 4px;
        transition: all 300ms;
    }

    button: hover{
        filter: brightness(85%);
    }

    a {
        text-decoration: none;
        color: ${colors.primaryCollor};
    }

    ul {
        list-style: none;
    }
    body .Toastify .Toastify__toast-container .Toastify__toast--success {
        background: ${colors.successCollor}
    }
    body .Toastify .Toastify__toast-container .Toastify__toast--error {
        background: ${colors.erroCollor}
    }
`;

export const Container = styled.section`
    max-width: 480px;
    background: #fff;
    margin: 30px auto;
    padding: 30px;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
`;