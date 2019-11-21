import React from "react"

function MainContent(){
    const date = new Date()
    const hours = date.getHours()
    let time;
    if(hours < 12)
    time = "morning"
    else if(hours >= 12 && hours <= 14)
    time = "afternoon"
    else if(hours > 14 && hours <=18)
    time = "evening"
    else time = "night"
    return (
       
        <main style ={{color: "#FF7C00"}}>Good {time}! {hours} </main>
    )
}
export default MainContent