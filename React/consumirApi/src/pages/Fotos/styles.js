import styled from 'styled-components';
import * as colors from '../../config/collors';

export const Title = styled.h1`
    
`;

export const Form = styled.form`
    label{
        width: 180px;
        height: 180px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #eee;
        border: 5px dashed ${colors.primaryCollor};
        margin: 30px auto;
        border-radius: 50%;
        cursor:pointer;
        overflow: hidden;
        
        img{
            width: 180px;
            height: 180px;
            border-radius: 50%;
        }
    }
  input{
      display: none;
  }  
`;