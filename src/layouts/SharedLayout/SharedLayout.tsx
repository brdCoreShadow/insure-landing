import * as SC from "./SharedLayoutStyled"
import type { ReactNode } from "react";


type Props = {
  children: ReactNode;
};

const SharedLayout: React.FC<Props> = ({ children }) => {
  return <SC.SharedLayoutCon>{children}</SC.SharedLayoutCon>;
};

export default SharedLayout;
