import * as SC from "./SocNetStyled";

import logoIcon from "../../assets/images/logo.svg";
import fbIcon from "../../assets/images/icon-facebook.svg"
import twitterIcon from "../../assets/images/icon-twitter.svg"
import pinterestIcon from "../../assets/images/icon-pinterest.svg"
import instagramIcon from "../../assets/images/icon-instagram.svg"
const SocNet = () => {
  return (
    <SC.SocNetCon>
      <SC.SocNetLogoThumb>
        <img src={logoIcon} alt="logoIcon" />
      </SC.SocNetLogoThumb>
      <SC.SocNetList>
        <li>
            <img src={fbIcon} alt="fb" />
        </li>
        <li>
            <img src={twitterIcon} alt="twitter" />
        </li>
        <li>
            <img src={pinterestIcon} alt="pinterest" />
        </li>
        <li>
            <img src={instagramIcon} alt="instagram" />
        </li>
      </SC.SocNetList>
    </SC.SocNetCon>
  );
};

export default SocNet;
