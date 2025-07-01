import styled from "@emotion/styled";

export const OthersCon = styled.div`

& > h4{
    margin-bottom: 36px;

    font-size: 13px;
    letter-spacing: 1.5px;

    color: #837D88;
}
`

export const OthersItem = styled.li`
& > a{
    text-decoration: none;
    font-size: 13px;
    letter-spacing: 1.5px;

    color: #2D2641;
}

&:not(:last-of-type){
    margin-bottom: 16px;
}
`