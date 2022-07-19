import React,{useContext, useEffect, useState} from 'react';
import {AppContext} from "./context/context";
import   _  from 'underscore';
import { doApi ,pics } from "../servers/apiSer";
function SortBy(props) {
    let {pics_ar,setPicsAr} = useContext(AppContext)
    let [pics , setPic ] = useState("flowers")


    useEffect(() => {        
        let apiUrl = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXA_KEY}&q=${pics}&image_type=photo&pretty=true&fbclid=IwAR3sLeuuGT4Ec--NLUYau3iQpKYpqNFRgPiPwzRsoxC6CeP6PcXVBIcLsfE`;
        doApi(apiUrl)
            .then(data => {
                console.log(data.hits);
                sortPics(pics_ar)
            })
    }, [pics] || [pics_ar])


    

  const sortPics = (propSort) => {
      let ar = [...pics_ar];
        let temp_ar = _.sortBy(ar, String(propSort)).reverse();
        console.log(temp_ar);
    
        setPicsAr(pics_ar);
    }
    



    return (
        <>
         <div className="d-flex p-2 col-lg-2">
            <label className="m-2">Sort By:</label>
            <select id="select_cat" className="form-control w-50" onChange={event => sortPics(event.currentTarget.value)}>
                <option value="all">All</option>
                <option value="likes">Likes</option>
                <option value="views">Views</option>
                <option value="user">User</option>
            </select>
        </div>
       
        </>
    )
}

export default SortBy
