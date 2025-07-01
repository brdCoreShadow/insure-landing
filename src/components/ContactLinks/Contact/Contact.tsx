import * as SC from "./ContactStyled"

const Contact = () => {
    return ( 
        <SC.ContactCon>
            <h4>contact</h4>
            <ul>
                <SC.ContactItem>
                    <a href="#">sales</a>
                </SC.ContactItem>
                <SC.ContactItem>
                    <a href="#">support</a>
                </SC.ContactItem>
                <SC.ContactItem>
                    <a href="#">live chat</a>
                </SC.ContactItem>
            </ul>
        </SC.ContactCon>
     );
}
 
export default Contact;