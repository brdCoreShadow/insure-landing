import styled from "@emotion/styled";

export const OurCompanyCon = styled.div`
  margin-top: 40px;
  
  & > h4 {
    margin-bottom: 36px;

    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1.5px;

    color: #837d88;
  }
`;

export const OurCompanyItem = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 16px;
  }

  & > a {
    font-size: 13px;
    letter-spacing: 1.5px;

    color: #2d2641;
    text-decoration: none;
  }
`;
