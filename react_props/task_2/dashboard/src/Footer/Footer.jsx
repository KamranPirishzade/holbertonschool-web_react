
import "./Footer.css";
import {getCurrentYear, getFooterCopy} from "../utils/utils.js" 

function Footer({ isIndex = false }) {
    return (
        <>
            <div className='App-footer'><p>Copyright {getCurrentYear()} - {getFooterCopy(isIndex)}</p></div>
        </>
    )
}

export default Footer