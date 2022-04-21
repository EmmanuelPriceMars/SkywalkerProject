import {useEffect, useRef, useState} from "react";

export const useAudio = () => {
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

    const play = () => {
        audioPlayer.current.play();
        animationRef.current = requestAnimationFrame(whilePlaying);
    }

        const togglePlayPause = () => {
            const preValue = isPlaying;
            setIsPlaying(!preValue);

            if (!preValue) {
                play()

            } else {
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



        return {
            isPlaying,
            duration,
            currenTime,
            audioPlayer,
            progressBar,
            calculateTime,
            togglePlayPause,
            changeRange,
            backThirty,
            forwardThirty,
            setDuration,
            setIsPlaying,
            setCurrentTime

        }
    }

