import React, { useState, useEffect } from 'react'
import { doApi } from "../servers/apiSer"
import Pics from './pics';
import Search from './search';
import SortBy from './sortBy';
import "../css/dark.css";
import Dark from './dark';
import {AppContext} from "./context/context"

function AppTest(props) {

    let [pics_ar, setPicsAr] = useState([])
    let [pics , setPic ] = useState("flowers")

    useEffect(() => {        
        let apiUrl = `https://pixabay.com/api/?key=15489555-318fcca1200a48f374a1ce3ea&q=${pics}&image_type=photo&pretty=true&fbclid=IwAR3sLeuuGT4Ec--NLUYau3iQpKYpqNFRgPiPwzRsoxC6CeP6PcXVBIcLsfE`;
        doApi(apiUrl)
            .then(data => {
                console.log(data.hits);
                setPicsAr(data.hits)
            })
    }, [pics] || [pics_ar])

 


    const showDarkWindow = (_pic,_tags) => {
        document.getElementById("id_dark").className = "dark";
        document.getElementById("id_dark img").src = _pic;
        document.getElementById("id_tag_dark").innerHTML = "Tags: "+_tags;
    
    }

    return (
        <>
        <AppContext.Provider value={{pics,setPic,pics_ar,setPicsAr}}>

        <div className="container">
            <h1>Pixa search api</h1>
            <div className="row align-items-center py-3">
                <Search pics={pics}/>
                {/* <SortBy /> */}
            </div>
            <div className="row">
                {pics_ar.map(item => {
                    return (
                        <Pics key={item.id} item={item} showDarkWindow={showDarkWindow}  />
                    )
                })}
            </div>
          <Dark />
        </div>
        </AppContext.Provider>

        </>
    )
}



export default AppTest
