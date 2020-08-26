import styled from 'styled-components';
import * as colors from '../../config/collors';

export const Form = styled.form`
    margin-top: 20px;  
    display:flex;
    flex-direction:column;

    input{
        margin-bottom: 20px;
        height: 40px;
        padding:0 10px;
        border-radius: 4px;
        border: 1px solid #ddd;
    }

    input: focus{
        border-bottom: 3px solid ${colors.primaryCollor}
    }
`;