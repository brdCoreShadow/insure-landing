import * as SC from "./FooterStyled"

import type { ReactNode } from "react";

type Props ={
  children: ReactNode;
};;

const Footer:React.FC<Props> = ({children}) => {
    return ( 
        <SC.FooterCon>
            {children}
        </SC.FooterCon>
     );
}
 
export default Footer;