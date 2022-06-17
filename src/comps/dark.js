import React from 'react'

function Dark(props) {


     const declarDarkEvent = () => {
            document.getElementById("id_dark").className = "d-none"; 
    } 
    
    
    return (
        <div className="dark d-none" id="id_dark">
        <div className="dark_box text-center">
            <img src="" className="w-100" id="id_dark img"/>
                <div id="id_tag_dark">Tags: dogs, cats</div>
                <button onClick={declarDarkEvent} id="dark_close_btn" className="btn btn-danger mt-3">close</button>
        </div>
    </div>
    )
}

export default Dark
