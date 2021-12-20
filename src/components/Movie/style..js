import styled from "styled-components";

const BoxMovie= styled.div`
    width: 129px;
    height: 193px;

    margin: 0px 0px 30px 0px;
    background-color: #FFFFFF;

    box-shadow: 0px 2px 4px 2px #0000001A;

    padding: 8px;

    img{
        width: 100%;
        height: 100%;
    }

    &:hover{
        cursor: pointer;
    }
`;

export default BoxMovie;