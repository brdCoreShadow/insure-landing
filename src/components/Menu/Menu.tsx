import * as SC from "./MenuStyled"

const Menu:React.FC = () => {
    return ( 
        <SC.MenuCon>
            <ul>
                <SC.MenuItem>
                    <a href="#">how we work</a>
                </SC.MenuItem>
                <SC.MenuItem>
                    <a href="#">blog</a>
                </SC.MenuItem>
                <SC.MenuItem>
                    <a href="#">account</a>
                </SC.MenuItem>
                <SC.MenuItem>
                    <a href="#">view plans</a>
                </SC.MenuItem>
            </ul>
        </SC.MenuCon>
     );
}
 
export default Menu;