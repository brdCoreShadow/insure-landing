import * as SC from "./HeaderStyled";

import logoIcon from "../../assets/images/logo.svg";
import burger from "../../assets/images/icon-hamburger.svg"
import closeIcon from "../../assets/images/icon-close.svg"
import { useScreenSize } from "../../hooks/useScreenSize";
import NavDesk from "../../components/DeskNav/DeskNav";

type Props = {
  isToggle: () => void;
  isMenu: boolean;
};

const Header: React.FC<Props> = ({isToggle, isMenu}) => {
   
    const {isDesktop} = useScreenSize()

    return (
    <SC.HeaderCon>
      <SC.HeaderLogoThumb>
        <img src={logoIcon} alt="logo" />
      </SC.HeaderLogoThumb>
      {isDesktop ? <NavDesk/> : <button type="button" onClick={isToggle}>
        {isMenu ? <img src={closeIcon} alt="close" /> : <img src={burger} alt="menu" />}
      </button>}
      
    </SC.HeaderCon>
  );
};

export default Header;
