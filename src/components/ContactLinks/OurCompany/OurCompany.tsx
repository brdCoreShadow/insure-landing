import * as SC from "./OurCompanyStyled"

const OurCompany:React.FC = () => {
    return ( 
        <SC.OurCompanyCon>
            <h4>our company</h4>
            <ul>
                <SC.OurCompanyItem>
                    <a href="#">how we work</a>
                </SC.OurCompanyItem>
                <SC.OurCompanyItem>
                    <a href="#">why insure?</a>
                </SC.OurCompanyItem>
                <SC.OurCompanyItem>
                    <a href="#">check price</a>
                </SC.OurCompanyItem>
                <SC.OurCompanyItem>
                    <a href="#">reviews</a>
                </SC.OurCompanyItem>
            </ul>
        </SC.OurCompanyCon>
     );
}
 
export default OurCompany;