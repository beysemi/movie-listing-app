import React from 'react';
import Image from 'next/image'

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { NotFoundImgWrapper, NotFoundGif, NotFoundSection } from './style';
const SearchNotFound = () => {
    return (
        <NotFoundSection>
            <Container>
                <Row>
                    <Col xs={12} md={12} lg={12}>
                        <NotFoundImgWrapper>
                            <Image width={400} height={320} src="/film-rolls.png" alt=""/>
                            <h3>Lost your way?</h3>
                            <p>Oops! This is awkward. You are looking for something that doesn't actually exist.</p>
                        </NotFoundImgWrapper>   
                    </Col>
                </Row>
            </Container>
            {/* <NotFoundGif/> */}
        </NotFoundSection>
    );
}

export default SearchNotFound;
