import styled from 'styled-components';
import *  as colors from '../../config/collors';


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    label{
        display: flex;
        line-height: 23px;
        font-size: 18px;
        flex-direction: column;
        margin-bottom: 20px;
    }

    input{
        height: 40px;
        font-size: 18px;
        border: 1px solid #ddd;
        padding: 0 10px;
        border-radius: 4px;
        margin-top: 5px;

        &: focus {
            border-bottom: 2px solid ${colors.primaryCollor}
        }
    }
`;