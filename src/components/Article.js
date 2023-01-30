import React from "react";

function Article ({ title, date = "January 1, 1970", preview, minutes }){
    let emoji = (minutes >= 30) ? ("🍱".repeat(Math.ceil(minutes/10))) : ("☕️".repeat(Math.ceil(minutes/5)))
    
    return (
        <article>
            <h3>{title}</h3>
            <small>{date} - {emoji} {minutes} min read</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article