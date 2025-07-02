import styled from "@emotion/styled";

export const ContactLinksCon = styled.div`
text-align: center;

text-transform: uppercase;

@media (min-width: 1280px){
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    padding-top: 48px;
}

& > *:not(:last-of-type){
    margin-bottom: 40px;

    @media (min-width: 1280px){
        margin-bottom: 0;
    }
}

`