import * as SC from "./HeroStyled";

import introMob from "../../assets/images/image-intro-mobile.jpg";

const Hero: React.FC = () => {
  return (
    <SC.HeroCon>
      <div>
        <img src={introMob} alt="intro" />
      </div>
      <SC.HeroContentCon>
        <SC.HeroTextWrapper>
            <h3>Humanizing your insurance.</h3>
            <p>Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.</p>
        </SC.HeroTextWrapper>
        <SC.HeroButton type="button">View plans</SC.HeroButton>
      </SC.HeroContentCon>
    </SC.HeroCon>
  );
};

export default Hero;
