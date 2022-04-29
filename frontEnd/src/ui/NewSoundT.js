import React from "react";
import ReactAudioPlayer from "react-audio-player";
import feelings from "../In my feelings .mp3"
import Bigbang from "../bang-v .mp3"


export const MogPlayer = () => {

    return(
        <>
            <div>
        <h1> feelings bro
        </h1>
                <ReactAudioPlayer src={feelings}
                                  controls

                />

            </div>

            <div>

            <ReactAudioPlayer src={Bigbang}
                              controls

            />

        </div>



</>
    )
}