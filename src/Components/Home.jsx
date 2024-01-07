import React from "react"
import './Home.scss'
import Imgslider from "./Imgslider"
import Recomended from "./Recomended"
import Tvshows from "./Tvshows"
import Anime from "./Anime"
import RecentlyAdded from "./Recentlyadded"


const Home =()=>{
    
    
        return(
            <>
               <container className="Home">
                <Imgslider/>
                <Recomended/>
                <RecentlyAdded/>
                <Tvshows/>
                <Anime/>
                

                </container>
            </>
        )
    
}
export default Home