import {Link} from "react-router-dom";

function Tvshows(){
    return(
        <>
          <div className="Recommended">
           <h4>Tv Shows</h4>
           
           <div>
            <Link className="Link">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmUSk3fTYaZmAVEC1bJUqPkdGFwgMAFIMUZQ&usqp=CAU" alt=""/>
            </Link>
            <Link className="Link">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2YLrRtXwwE_obHzf7EyVq4PfZ6fqAUERokQ&usqp=CAU" alt=""/>
            </Link>
            
            <Link className="Link">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVrieFb1kUqi525GBHz9IPcYbyhQR-kaNbXg&usqp=CAU" alt=""/>
            </Link>

            <Link className="Link">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT07Y6zAEFOnAesDyKxgZ10xfKUgwwusgzMiA&usqp=CAU" alt=""/>
            </Link>
           </div>
           </div>
        </>
    )
}

export default Tvshows