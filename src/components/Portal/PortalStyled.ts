import styled from "@emotion/styled";

export const PortalOverlay = styled.div`
  position: absolute;

  top: 0;
  left: 0;
  z-index: 5;

  transform: translate(0, 94px);

  width: 100%;
  height: 100%;

  overflow: hidden;

  background: rgba(0, 0, 0, 0.5);
`;
