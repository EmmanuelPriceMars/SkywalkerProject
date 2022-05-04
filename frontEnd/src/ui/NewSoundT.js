import React, {createRef, useState} from "react";
import ReactAudioPlayer from "react-audio-player";
import feelings from "../In my feelings .mp3"
import Bigbang from "../bang-v .mp3"
import foreign from "../Foreign.mp3"
import melody from "../Melody4 .mp3"
import bangStick from "../ImageSSS/bangstick.jpg"
import foreignThree from "../ImageSSS/foreign tree.jpg"
import inMyFeelings from "../ImageSSS/in my feelings pic.jpg"
import melodyPic from "../ImageSSS/melody pic.jpg"
import style from "./New.Modules.css"


export const MogPlayer = () => {



    return(
        <>
            <div className={style.ManMade}>
        <h1> feelings bro
        </h1>
                <img alt="feeling" src={inMyFeelings} style={{width:150, height: 150}}/>
                <ReactAudioPlayer  src={feelings}
                                  controls

                />

            </div>

            <div className={style.ManMade}>
                <h1> Big Bang</h1>


                <img src={bangStick} style={{width:150, height: 150}}/>

            <ReactAudioPlayer src={Bigbang}
                              controls


            />

        </div>

            <div>
                <h1> Foreign</h1>
                <img src={foreignThree} style={{width:150, height: 150}}/>

                <ReactAudioPlayer src={foreign}
                                  controls

                />


                <div className={style.ManMade}>
                    <h1> Melody</h1>
                    <img src={melodyPic} style={{width:150, height: 150}}/>

                    <ReactAudioPlayer src={melody}
                                      controls

                    />

                </div>


            </div>




        </>
    )
}