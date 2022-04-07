import React from "react"
import {Button, Container,  Row, Col, Image,} from "react-bootstrap";
import {Employee} from "./Employee";
// import {Image} from "react-bootstrap/Image";


export function Home() {
	const employees = [
		{
			name: 'boogaloo',
			job: 'carpenter',

		},
		{
			name: 'zoe',
			job: 'exploder'
		},
		{
			name: 'braken',
			job: 'boxer'
		},
		{
			name:'koonite',
			job:' vampire'
		},

	]

	return (
		<>
			<Container>
				<div className="container bg-light p-5 rounded my-5">
						<h1 className="display-4">Scared you!</h1>
						<p>Lets go we just keep doing this until we have it down</p>
					<Button variant="primary"> eskifidg</Button>
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
				<Row className={'g-5 py-5'}>
					{employees.map(employee => <Employee employee={employee}/>)}
				</Row>

</Container>




			</>
	)
}