import styled from "styled-components";

const FooterBox = styled.div`
    width: 100%;
    height: 117px;

    padding: 14px 10px 14px 10px;

    background-color: #DFE6ED;

    border-top: 1px solid #9EADBA;

    display: flex;
    justify-content: flex-start;
    gap: 15px;

    font-size: 26px;
    color: #293845;

    position: fixed;
    bottom: 0;

    div:nth-child(1){
        width: 64px;
        height: 89px;

        background-color: #FFFFFF;

        box-shadow: 0px 2px 4px 2px #0000001A;

        padding: 8px;

        img{
            width: 100%;
            height: 100%;            
        }
    }
    div:nth-child(2){
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

`;
export default FooterBox;