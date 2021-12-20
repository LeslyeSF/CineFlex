import styled from "styled-components";

const BoxSeat = styled.div`
    width: 26px;
    height: 26px;

    background-color:${(props)=> props.selected === true ? "#8DD7CF" : props.available === true ? "#C3CFD9":"#FBE192"};
    border: 1px solid ${(props)=> props.selected === true ? "#1AAE9E" : props.available === true ? "#808F9D":"#F7C52B"};

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 11px;
    color: #000000;

    &:hover{
        cursor: pointer;
    }
`;
export default BoxSeat;