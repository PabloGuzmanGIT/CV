import React, {useState} from 'react';
import Sound from 'react-sound';
import music from '../assets/Daniel-Castro-Ill-Play-The-Blues-For-You.ogg';
import './Music.css';
function Music (){
    return(
        <div  className='Music1'>
            <audio controls   loop>
                <source src={music} type="audio/ogg" />
                Your browswer does not support 

            </audio>
        </div>
    )
}

export default Music;