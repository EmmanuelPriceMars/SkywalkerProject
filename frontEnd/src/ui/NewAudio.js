import React from "react";
import {useState} from "react";
import useSound from "use-sound";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlayCircle, faPauseCircle} from "@fortawesome/free-solid-svg-icons";
import song1 from "../bang-v .mp3"
import song2 from "../Foreign.mp3"
import song3 from "../In my feelings .mp3"
import song4 from "../Melody4 .mp3"


export const MusicSampler = () => {

    const [playing, setPlaying] = useState(null);
    const [playing2, setPlaying2] = useState(null);
    const [playing3, setPlaying3] = useState(null);
    const [playing4, setPlaying4] = useState(null);

    const [song, setSong] = useState('');
    const [play, {stop}] = useSound(song);

    return(
        <>
            <div className='musicContainer'>

                <div className="song" onMouseDown={() => setSong(song1)} onClick={() => { playing? stop() : play();
                    setPlaying(!playing)
                }}>
                    {playing? <FontAwesomeIcon icon={faPauseCircle}/> :
                        <FontAwesomeIcon icon={faPlayCircle} />

                    }


                </div>

                <div className="song" onMouseDown={() => setSong(song2)}
                     onClick={() =>{
                    playing2? stop() : play();
                    setPlaying2(!playing2)
                }}>
                    {playing2? <FontAwesomeIcon icon={faPauseCircle}/> :
                        <FontAwesomeIcon icon={faPlayCircle} />

                    }


                </div>

                <div className="song" onMouseDown={() => setSong(song3)} onClick={() =>{
                    playing3? stop() : play();
                    setPlaying3(!playing3)
                }
                }>
                    {playing3? <FontAwesomeIcon icon={faPauseCircle}/> :
                        <FontAwesomeIcon icon={faPlayCircle} />

                    }

                </div>

                <div className="song" onMouseDown={() => setSong(song4)} onClick={() => {
                    playing4? stop() : play();
                    setPlaying4(!playing4)
                }}>
                    {playing4? <FontAwesomeIcon icon={faPauseCircle}/> :
                        <FontAwesomeIcon icon={faPlayCircle} />

                    }

                </div>





            </div>




        </>
    )
}



