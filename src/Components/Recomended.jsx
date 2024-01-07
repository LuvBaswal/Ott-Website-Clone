
import {Routes, Route, } from "react-router-dom";
import UriPoster from "./UriPoster";

function Recomended() {

  
  return (
    <>
      <div className="Recommended">
        <h4>Recommended for you</h4>

        <div>

          <a  href={UriPoster.url} className="Link">
            <img src="https://assets-in.bmscdn.com/discovery-catalog/events/et00062444-zcyqeffnyg-landscape.jpg" alt="" />
          </a>
          <a className="Link">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT7jx2zNMUEZuEKf6Gt8HFON3nZCOEEWFXDg&usqp=CAU" alt="" />
          </a>

          <a className="Link">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAcFK4A7f97P7JJRdezY6gxqBwXFPMMGA9Mg&usqp=CAU" alt="" />
          </a>

          <a className="Link">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_qj2X1K5tYtVefCm0NiLyQ8OAkjtVKNcV3Q&usqp=CAU " alt="" />
          </a>
             
          <Routes>
            <Route path="/UriPoster" element={<UriPoster/>}></Route>
            
           </Routes>

        </div>
      </div>
    </>
  )
}

export default Recomended