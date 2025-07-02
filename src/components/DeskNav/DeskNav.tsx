import * as SC from "./DesknavStyled";


const NavDesk:React.FC = () => {
    return ( 
        <SC.DeskNavCon>
            <div></div>
            <SC.NavDeskList>
                <SC.NavDeskItem>
                    <a href="#">how we work</a>
                </SC.NavDeskItem>
                <SC.NavDeskItem>
                    <a href="#">blog</a>
                </SC.NavDeskItem>
                <SC.NavDeskItem>
                    <a href="#">account</a>
                </SC.NavDeskItem>
            </SC.NavDeskList>
            <SC.NavDeskBtn>view plans</SC.NavDeskBtn>
        </SC.DeskNavCon>
     );
}
 
export default NavDesk;