import styled from "@emotion/styled";

export const HelpMeCon = styled.div`
  & > h4 {
    margin-bottom: 36px;

    font-size: 13px;
    letter-spacing: 1.5px;

    color: #837d88;
  }
`;

export const HelpMeItem = styled.li`
  & > a {
    text-decoration: none;

    font-size: 13px;
    letter-spacing: 1.5px;

    color: #2d2641;

    @media (min-width: 1280px) {
      &:hover,
      &:focus,
      &:active {
        text-decoration: underline;

        cursor: pointer;
      }
    }
  }

  &:not(:last-of-type) {
    margin-bottom: 16px;
  }
`;
