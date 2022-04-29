import React from "react"
import {Button, Container,  Row, Col, Image,} from "react-bootstrap";
import {AudioPlayer} from "./AudioPlayer";
import {MusicSampler} from "./NewAudio"
import style from "./Home.Modules.css"
import background from "../images/sempiternal.jpg"
import {MogPlayer} from "./NewSoundT";


export function Home() {




	return (
		<>
			<div style={{ backgroundImage: `url(${background})` }} className="fill-window">
			<Container >
				<div className="  p-5 rounded my-5 text-center">
						<h1 className="display-4">SKY WALKER BEATS</h1>


					</div>


				<div className="  py-5">
					<Container>
						<Row className={"g-5"}>
							<Col md={3}>

							</Col>
							<Col md={9}>
								<p></p>

							</Col>
						</Row>
					</Container>

				</div>


			<Container>
<MusicSampler/>
				<MogPlayer/>



			</Container>
		</Container>

</div>



			</>

	)
}