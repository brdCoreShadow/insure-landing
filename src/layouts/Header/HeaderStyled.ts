import styled from "@emotion/styled";

export const HeaderCon = styled.header`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

padding-top: 32px;
padding-bottom: 32px;
padding-left: 24px;
padding-right: 24px;

background-color: #fff;

@media (min-width: 1280px){
    padding-left: 166px;
    padding-right: 166px;
}
`

export const HeaderLogoThumb = styled.div`
& > img{
    width: 112px;
    height: 18px;
}
`