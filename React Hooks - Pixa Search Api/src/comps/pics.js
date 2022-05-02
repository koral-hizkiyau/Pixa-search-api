import React from 'react'

function Pics(props) {


   
    return (
        <div className="col-lg-6 border p-2">
            <img src={props.item.previewURL} alt={props.item.user} className="w-25 float-left m-2 py-2" />
            <h2>{props.item.user}</h2>
            <div>Likes: {props.item.likes}</div>
            <div>Views: {props.item.views}</div>
            <button className="btn btn-info" onClick={() => props.showDarkWindow(props.item.previewURL,props.item.tags)} >More info</button>
        </div>
    )
}

export default Pics
