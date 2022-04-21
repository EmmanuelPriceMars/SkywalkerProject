import React, {useState, useRef, useEffect} from "react";
import {Button} from "bootstrap";
import {Container} from "react-bootstrap"
import style from "./Audio.Module.css"
import {BsArrowBarLeft} from "react-icons/bs"
import {BsArrowBarRight} from "react-icons/bs"
import {BsPlayFill} from "react-icons/bs"
import {BsPauseFill} from "react-icons/bs"
import ReactAudioPlayer from 'react-audio-player';
import song from "../Foreign.mp3"
import song2 from "../bang-v .mp3"
import {useAudio} from "./AudioHooks";


export const AudioPlayer = () => {




const chapters =[ {
       start: 0,
    end: 15
},
    {
        start: 60,
        end: 75
    }];



    const {
       isPlaying,
        duration,
        currentTime,
        audioPlayer,
        progressBar,
        calculateTime,
        togglePlayPause,
        changeRange,
        forwardThirty,
        backThirty,
        setIsPlaying,
        setCurrentTime,
        setDuration

    } = useAudio();


   return (
        <>
            <Container className={style.audioPlayer} >



    <audio ref={audioPlayer} src={song} preload="metadata"> </audio>
    <button className={style.forwardBackwards} onClick={backThirty}> <BsArrowBarLeft/> 30s</button>
    <button onClick={togglePlayPause} className={style.playPause}>
        {isPlaying ? <BsPauseFill/> : <BsPlayFill/>}

    </button>
    <button className={style.forwardBackwards} onClick={forwardThirty}>30s <BsArrowBarRight/> </button>
<div className={style.currentTime}>
    {calculateTime(currentTime)}
</div>
<div className={style.progressBarWrapper}>
    <input type="range" className={style.progressBar} defaultValue="0" ref={progressBar} onChange={changeRange}/>
    {chapters.map( (chapter, i ) => {
        const leftStyle = chapter.start / duration * 100;
        const widthStyle = (chapter.end - chapter.start) / duration * 100;
        return( <div key={i}
                     className={`${style.chapter} ${chapter.start = 0 && style.start} ${chapter.end = duration && style.end}`}
                     style={{'--left': `${leftStyle}%`,
                         '--width': `${widthStyle}%`,

        }}>

        </div>)

    }

                         )}



</div>
                <div className={style.duration}>
                    {(duration && !isNaN(duration)) && calculateTime(duration)}
                </div>

            </Container>










        </>

    )

}