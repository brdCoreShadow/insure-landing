import * as SC from "./HeroStyled";

import introMob from "../../assets/images/image-intro-mobile.jpg";
import { useScreenSize } from "../../hooks/useScreenSize";

const Hero: React.FC = () => {

const {isDesktop} = useScreenSize()

  return (
    <SC.HeroCon>
      <SC.HeroIntroPicThumb>
        <img src={introMob} alt="intro" />
      </SC.HeroIntroPicThumb>
      <SC.HeroContentCon>
        {isDesktop ? <SC.DeskLine></SC.DeskLine> : null}
        <SC.HeroTextWrapper>
            <h3>Humanizing your insurance.</h3>
            <p>Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.</p>
        </SC.HeroTextWrapper>
        <SC.HeroButton type="button">View plans</SC.HeroButton>
        <SC.BackWrapper></SC.BackWrapper>
      </SC.HeroContentCon>
    </SC.HeroCon>
  );
};

export default Hero;
