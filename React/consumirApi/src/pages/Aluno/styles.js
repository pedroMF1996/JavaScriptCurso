import styled from 'styled-components';
import * as colors from '../../config/collors';

export const Form = styled.form`
    margin-top: 30px;
    display: flex;
    flex-direction: column;

    input{
        height: 40px;
        margin-bottom: 20px;
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 0 10px;
        
        &:focus {
            border-bottom: 2px solid ${colors.primaryCollor};
        }
    }

`;

export const ProfilePicture = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0 20px;
    margin-top: 20px;
    position: relative;

    img{
        widht: 180px;
        height: 180px;
        border-radius: 50%;
    }

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        position: absolute;
        bottom: 0;
        color: #fff;
        background: ${colors.primaryCollor};
        width: 36px;
        height: 36px;
        border-radius: 50%;
        transition-duration: 2s;
        
        & :hover{
            filter: brightness(85%);
        }
    }
`;

export const Title = styled.h1`
    text-align: center;
`;