import React from "react"
import {Button, Container,  Row, Col, Image,} from "react-bootstrap";
import {AudioPlayer} from "./AudioPlayer";
import {Footer} from "./Footer";




export function Home() {

	return (
		<>
			<Container>
				<div className="container bg-light p-5 rounded my-5 text-center">
						<h1 className="display-4">SKY WALKER BEATS</h1>


					</div>
			</Container>

			<div className=" bg-light py-5">
				<Container>
					<Row className={"g-5"}>
						<Col md={3}>
							<Image  src="https://via.placeholder.com/150 " alt="..."></Image>
						</Col>
						<Col md={9}>
							<p>black airforce energy black airforce energy black airforce energy black airforce energyblack airforce energy black airforce energy black airforce energy black airforce energy black airforce energyblack airforce energy black airforce energy black airforce energy</p>

						</Col>
					</Row>
				</Container>

			</div>
			<Container>
<AudioPlayer/>



			</Container>






			</>
	)
}