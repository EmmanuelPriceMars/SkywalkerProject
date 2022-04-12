import React, {useState, useRef, useEffect} from "react";
import {Button} from "bootstrap";
import {Container} from "react-bootstrap"
import style from "./Audio.Module.css"
import {BsArrowBarLeft} from "react-icons/bs"
import {BsArrowBarRight} from "react-icons/bs"
import {BsPlayFill} from "react-icons/bs"
import {BsPauseFill} from "react-icons/bs"
import ReactAudioPlayer from 'react-audio-player';
import audio from "../audioSamples/Foreign.mp3"


export const AudioPlayer = () => {
   const [isPlaying, setIsPlaying] = useState(false);
   const [duration, setDuration] = useState(0);
   const [currenTime, setCurrentTime] = useState(0)


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

    return (
        <>
            <Container className={style.audioPlayer} >



    <audio ref={audioPlayer} src="https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3" preload="metadata"> </audio>
    <button className={style.forwardBackwards}> <BsArrowBarLeft/> 30s</button>
    <button onClick={togglePlayPause} className={style.playPause}>
        {isPlaying ? <BsPauseFill/> : <BsPlayFill/>}

    </button>
    <button className={style.forwardBackwards}>30s <BsArrowBarRight/> </button>
<div className={style.currentTime}>
    {calculateTime(currenTime)}
</div>
<div>
    <input type="range" className={style.progressBar} defaultValue="0" ref={progressBar} onChange={changeRange}/>


</div>
                <div className={style.duration}>
                    {(duration && !isNaN(duration)) && calculateTime(duration)}
                </div>

            </Container>


        </>

    )

}