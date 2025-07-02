import styled from "@emotion/styled";

export const DeskNavCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const NavDeskList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-right: 32px;
`;

export const NavDeskItem = styled.li`
  &:not(:last-of-type) {
    margin-right: 24px;
  }

  & > a {
    text-decoration: none;

    text-transform: uppercase;

    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1.5px;

    color: #837d88;

    transition: color 0.3s;

    &:hover,
    &:focus,
    &:active {
      color: #2c2830;

      cursor: pointer;

      transition: color 0.3s;
    }
  }
`;

export const NavDeskBtn = styled.button`
padding-top: 12px;
padding-bottom: 12px;
padding-left: 28px;
padding-right: 28px;

text-transform: uppercase;

font-size: 13px;
letter-spacing: 1.5px;
font-weight: 700;

background-color: transparent;

color: #2C2830;

border: 1px solid #2C2830;

    transition: all 0.3s;


&:hover, &:focus, &:active{
    background-color: #2C2830;

    color: #fff;

    cursor: pointer;

    transition: all 0.3s;
}
`
