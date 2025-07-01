import * as SC from "./OthersStyled"

const Others:React.FC = () => {
    return ( 
        <SC.OthersCon>
            <h4>others</h4>
            <ul>
                <SC.OthersItem>
                    <a href="#">careers</a>
                </SC.OthersItem>
                <SC.OthersItem>
                    <a href="#">press</a>
                </SC.OthersItem>
                <SC.OthersItem>
                    <a href="#">licenses</a>
                </SC.OthersItem>
            </ul>
        </SC.OthersCon>
     );
}
 
export default Others;