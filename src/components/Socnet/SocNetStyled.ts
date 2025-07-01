import styled from "@emotion/styled";

export const SocNetCon = styled.div`
padding-top: 88px;
padding-bottom: 40px;

text-align: center;

border-bottom: 1px solid #DADADA;


`

export const SocNetLogoThumb = styled.div`
margin-bottom: 32px;

& > img{
    width: 112px;
    height: 18px;

    margin-left: auto;
    margin-right: auto;
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