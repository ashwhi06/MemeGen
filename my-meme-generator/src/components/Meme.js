import React from 'react';

export default function Meme() {
    return(
        <main>
            <form className="form">
                <input type="text" placeholder="Top Text here..." className="form--input" />
                <input type="text" placeholder="Bottom Text here..." className="form--input" />
                <button className="form--button" >Get a new meme image 🖼</button>
                <img src="" />
            </form>
        </main>
 
    )
}