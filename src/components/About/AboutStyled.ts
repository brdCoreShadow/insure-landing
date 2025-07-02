import styled from "@emotion/styled";

export const AboutCon = styled.div`
  padding-top: 140px;
  padding-bottom: 140px;
  padding-left: 24px;
  padding-right: 24px;

  text-align: center;

  @media (min-width: 1280px) {
    padding-top: 0;
    padding-bottom: 158px;
    padding-left: 164px;
    padding-right: 164px;

    text-align: left;
  }
`;

export const AboutLine = styled.div`
  display: inline-block;

  width: 50%;
  height: 3px;

  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;

  background-color: #c396c6;

  @media (min-width: 1280px){
    width: 150px;

    margin-bottom: 64px;
  }
`;

export const AboutTitle = styled.h3`
  margin-bottom: 80px;

  font-size: 48px;
  letter-spacing: -0.67px;
  font-weight: 400;

  color: #2c2830;

  @media (min-width: 1280px){
    margin-bottom: 96px;

    font-size: 72px;
    letter-spacing: -1px;
    line-height: 0.9;
  }
`;

export const AboutList = styled.ul`
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const AboutItem = styled.li`

@media (min-width: 1280px){
}

  &:not(:last-of-type) {
    margin-bottom: 56px;

    @media (min-width: 1280px){
        margin-bottom: 0;
        margin-right: 30px;
    }
  }
`;

export const AboutIconThumb = styled.div`
  margin-bottom: 32px;

  & > img {
    width: 86px;
    height: 86px;

    margin-left: auto;
    margin-right: auto;

    @media (min-width: 1280px){
        margin-left: 0;
        margin-right: 0;
    }
  }
`;

export const AboutItemContent = styled.div`
  & > h4 {
    margin-bottom: 16px;

    font-size: 28px;
    letter-spacing: -0.39px;

    color: #2c2830;
  }

  & > p {
    font-size: 16px;
    line-height: 1.6;

    color: #837d88;
  }
`;
