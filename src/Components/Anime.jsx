import {Link} from "react-router-dom";

function Anime(){
    return(
        <>
          <div className="anime">
           <h4>Anime</h4>
           
           <div>
            <Link className="Link">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU56k8AM-Sua9mbpNhvak53ZKS0Tx0QuPTpA&usqp=CAU" alt=""/>
            </Link>
            <Link className="Link">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYnH_6isnScPbpKZUz-BKEn1JXgUsN6N4nag&usqp=CAU" alt=""/>
            </Link>
            
            <Link className="Link">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiVjlcrcc-ij0df6eFbmKphZYQelnwGwEYPg&usqp=CAU" alt=""/>
            </Link>

            <Link className="Link">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Pza34ltIigcy-OmKTTAXI3T8Qogb6nSbSw&usqp=CAU" alt=""/>
            </Link>
           </div>
           </div>
        </>
    )
}

export default Anime