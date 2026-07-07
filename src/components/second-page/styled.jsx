import styled from "styled-components";

const SecondPagePart = styled.div`
    div {
        text-align: center;
    }
    h2 {
        color: #000000b0;
        font-size: 60px;
        font-weight: 600;
        font-family: ArmAllegrou;
        letter-spacing: 10px;
    }
`
const SecondPagePartContext = styled.div`
    div {
        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: center;
        align-items: center;
        margin-top: 25px;
        text-align: center;
        img {
            object-fit: cover;
            margin-right: 20px;
            margin-top: 20px;
        }
        h4 {
            background-color: #ffffff;
            border-radius: 15px;
            padding: 20px;
            font-size: 31px;
            font-family: ArmAllegrou;
            margin-bottom: 40px;
        }
    }
`
export { SecondPagePart, SecondPagePartContext }