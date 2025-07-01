import * as SC from "./HelpMeStyled"

const HelpMe:React.FC = () => {
  return (
    <SC.HelpMeCon>
      <h4>help me</h4>
      <ul>
        <SC.HelpMeItem>
            <a href="#">faq</a>
        </SC.HelpMeItem>
        <SC.HelpMeItem>
            <a href="#">terms of use</a>
        </SC.HelpMeItem>
        <SC.HelpMeItem>
            <a href="#">privacy policy</a>
        </SC.HelpMeItem>
        <SC.HelpMeItem>
            <a href="#">cookies</a>
        </SC.HelpMeItem>
      </ul>
    </SC.HelpMeCon>
  );
};

export default HelpMe;
