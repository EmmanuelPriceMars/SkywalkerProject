import React, {useState} from "react";
import {Button} from "bootstrap";
import {Container} from "react-bootstrap"
import style from "./Audio.Module.css"
import {BsArrowBarLeft} from "react-icons/bs"
import {BsArrowBarRight} from "react-icons/bs"
import {BsPlayFill} from "react-icons/bs"
import {BsPauseFill} from "react-icons/bs"



export const AudioPlayer = () => {
   const [isPlaying, setIsPlaying] = useState(false);
   const togglePlayPause = () => {
       setIsPlaying(!isPlaying);
     
   }
    return (
        <>
            <Container className={style.audioPlayer} >



    <audio src="../audio%20samples/Foreign%20168bpm.mp3" preload="metadata"> </audio>
    <button className={style.forwardBackwards}> <BsArrowBarLeft/> 30s</button>
    <button onClick={togglePlayPause} className={style.playPause}>
        {isPlaying ? <BsPauseFill/> : <BsPlayFill/>}

    </button>
    <button className={style.forwardBackwards}>30s <BsArrowBarRight/> </button>
<div className={style.currentTime}>
    0:00
</div>
<div>
    <input type="range" className={style.progressBar}/>


</div>
                <div className={style.duration}>
                    2:21
                </div>

            </Container>


        </>

    )

}