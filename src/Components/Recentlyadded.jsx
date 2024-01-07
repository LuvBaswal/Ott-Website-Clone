import {Link} from "react-router-dom";

function RecentlyAdded(){
    return(
        <>
          <div className="Recommended">
           <h4>Recently Added</h4>
           
           <div>
            <Link className="Link">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQneOTI2K1CrC666cj7QRpkZp2h4ycdAUBc9A&usqp=CAU" alt=""/>
            </Link>
            <Link className="Link">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZreew09GvB2LRcAcCLtUCc4uVfg1sjmuKDg&usqp=CAU" alt=""/>
            </Link>
            
            <Link className="Link">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwgf0sc96m5o6xFelBiZ4azIMUGByKySLjMA&usqp=CAU" alt=""/>
            </Link>

            <Link className="Link">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn61RpCnXizBOyj2v1An28lSE_bMSW6xyY0g&usqp=CAU" alt=""/>
            </Link>
           </div>
           </div>
        </>
    )
}

export default RecentlyAdded