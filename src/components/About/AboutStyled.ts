import styled from "@emotion/styled";

export const AboutCon = styled.div`
  padding-top: 140px;
  padding-bottom: 140px;
  padding-left: 24px;
  padding-right: 24px;

  text-align: center;
`;

export const AboutLine = styled.div`
  display: inline-block;

  width: 50%;
  height: 3px;

  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;

  background-color: #c396c6;
`;

export const AboutTitle = styled.h3`
  margin-bottom: 80px;

  font-size: 48px;
  letter-spacing: -0.67px;

  color: #2c2830;
`;

export const AboutItem = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 56px;
  }
`;

export const AboutIconThumb = styled.div`
  margin-bottom: 32px;

  & > img {
    width: 86px;
    height: 86px;

    margin-left: auto;
    margin-right: auto;
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
