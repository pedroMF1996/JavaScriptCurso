import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;

    top: 0;
    left: 0;

    z-index: 1;

    display:flex;
    align-items: center;
    justify-content: center;

    font-size: 30px;
    color: #eee;

    div{
        position:absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
        background: rgba(0,0,0,0.25);
    }

    span {
        z-index: 2;
    }
`;
