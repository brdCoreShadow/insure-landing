import * as SC from "./AboutStyled";

import peopleFirtstIcon from "../../assets/images/icon-people-first.svg";
import snappyProcessIcon from "../../assets/images/icon-snappy-process.svg";
import affordablePriceIcon from "../../assets/images/icon-affordable-prices.svg";
const About = () => {
  return (
    <SC.AboutCon>
      <SC.AboutLine></SC.AboutLine>
      <SC.AboutTitle>We’re different</SC.AboutTitle>
      <ul>
        <SC.AboutItem>
          <SC.AboutIconThumb>
            <img src={snappyProcessIcon} alt="snappyProcessIcon" />
          </SC.AboutIconThumb>
          <SC.AboutItemContent>
            <h4>Snappy Process</h4>
            <p>
              Our application process can be completed in minutes, not hours.
              Don’t get stuck filling in tedious forms.
            </p>
          </SC.AboutItemContent>
        </SC.AboutItem>
        <SC.AboutItem>
          <SC.AboutIconThumb>
            <img src={affordablePriceIcon} alt="affordablePriceIcon" />
          </SC.AboutIconThumb>
          <SC.AboutItemContent>
            <h4>Affordable Prices</h4>
            <p>
              We don’t want you worrying about high monthly costs. Our prices
              may be low, but we still offer the best coverage possible.
            </p>
          </SC.AboutItemContent>
        </SC.AboutItem>
        <SC.AboutItem>
          <SC.AboutIconThumb>
            <img src={peopleFirtstIcon} alt="peopleFirtstIcon" />
          </SC.AboutIconThumb>
          <SC.AboutItemContent>
            <h4>People First</h4>
            <p>
              Our plans aren’t full of conditions and clauses to prevent
              payouts. We make sure you’re covered when you need it.
            </p>
          </SC.AboutItemContent>
        </SC.AboutItem>
      </ul>
    </SC.AboutCon>
  );
};

export default About;
