import React, { useState, useRef, useEffect, useContext } from 'react'
import { doApi } from "../servers/apiSer"
import {AppContext} from "./context/context";

function Search(props) {
    let {setPic} = useContext(AppContext)
    let id_input = useRef()


   

const updateDays = () =>{
    let newPics = id_input.current.value; 
    setPic(newPics)
              
}

    return (
        <>
         <div className="d-flex py-2 col-lg-6">
                    <input ref={id_input} type="text" placeholder="Search..." className="w-75 form-control mx-2" />
                    <button onClick={updateDays}  className="btn btn-success">Search</button>
                </div>
        </>

    )
}

export default Search
