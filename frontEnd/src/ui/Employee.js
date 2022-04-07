import React from "react";
import {Col, Image} from "react-bootstrap";

export const Employee = ({employee}) => {
    const {name,job} = employee

    return(
        <>
            <Col md={3}>
                <Image className={"d-block mx-auto"} fluid roundedCircle src="https://via.placeholder.com/150"></Image>
                <div className={"bg-secondary rounded mt-5"}>
                    <h3>{name}</h3>
                    <p> {job}</p>
                </div>
            </Col>

        </>
    )
}