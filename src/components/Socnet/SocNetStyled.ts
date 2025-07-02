import styled from "@emotion/styled";

export const SocNetCon = styled.div`
padding-top: 88px;
padding-bottom: 40px;

text-align: center;

border-bottom: 1px solid #DADADA;

@media (min-width: 1280px){
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding-top: 68px;
    padding-bottom: 36px;
}
`

export const SocNetLogoThumb = styled.div`
margin-bottom: 32px;

& > img{
    width: 112px;
    height: 18px;

    margin-left: auto;
    margin-right: auto;

    @media (min-width: 1280px){
        margin-left: 0;
        margin-right: 0;
    }
}

@media (min-width: 1280px){
    margin-bottom: 0;
}
`

export const SocNetList = styled.ul`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

& > li {

    &:not(:last-of-type){
        margin-right: 16px;
    }
}
`