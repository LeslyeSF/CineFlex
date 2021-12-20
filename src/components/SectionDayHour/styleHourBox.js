import styled from "styled-components";
const HourBox = styled.div`
    margin-top: 20px;

    display: flex;
    align-items: flex-start;
    gap: 10px;

    div{
        width: 82px;
        height: 43px;

        background-color: #E8833A;

        font-size: 18px;
        color: #FFFFFF;

        display: flex;
        align-items: center;
        justify-content: center;
    }
    div:hover{
        cursor: pointer;
    }
    a {
        text-decoration: none;
    }
`;
export default HourBox;