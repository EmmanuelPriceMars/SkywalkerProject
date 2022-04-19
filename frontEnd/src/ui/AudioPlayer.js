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



export const AudioPlayer = () => {


   const [isPlaying, setIsPlaying] = useState(false);
   const [duration, setDuration] = useState(0);
   const [currenTime, setCurrentTime] = useState(0)

const chapters =[ {
       start: 0,
    end: 15
},
    {
        start: 60,
        end: 75
    }];


   // references reference our audio component and progress bar
   const audioPlayer = useRef(null);
   const progressBar = useRef(null);
   const animationRef = useRef()
   useEffect(() =>{
       const seconds = Math.floor(audioPlayer.current.duration);
       setDuration(seconds);
       progressBar.current.max = seconds;

   },[audioPlayer?.current?.loadedMetadata, audioPlayer?.current?.readyState]);



   const calculateTime = (secs) => {
       const minutes = Math.floor(secs / 60);
       const returnMinutes = minutes < 10? `0${minutes}` : `${minutes}`;
       const seconds = Math.floor (secs %  60);
       const returnSeconds = seconds < 10? `0${seconds}` : `${seconds}`;
return `${returnMinutes} : ${returnSeconds}`;
   }

   const togglePlayPause = () => {
       const preValue = isPlaying;
       setIsPlaying(!preValue);

       if(!preValue){
           audioPlayer.current.play();
           animationRef.current = requestAnimationFrame(whilePlaying);

       }else {
           audioPlayer.current.pause();
           cancelAnimationFrame(animationRef.current)
       }
     
   }

   const whilePlaying = () => {
       progressBar.current.value = audioPlayer.current.currentTime;
     changePlayerCurrentTime();
       animationRef.current = requestAnimationFrame(whilePlaying);
   }

   const changeRange = () => {
       audioPlayer.current.currentTime = progressBar.current.value;
changePlayerCurrentTime();
   }

   const changePlayerCurrentTime = () => {
       progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
       setCurrentTime(progressBar.current.value);

   }
   const backThirty = () => {
       progressBar.current.value = Number(progressBar.current.value) - 30;
       changeRange();
   }

   const forwardThirty = () => {
       progressBar.current.value = Number(progressBar.current.value) + 30;
       changeRange()
   }

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
    {calculateTime(currenTime)}
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