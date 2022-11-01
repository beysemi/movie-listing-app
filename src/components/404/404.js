import React from 'react';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { NotFoundImgWrapper, NotFoundGif, Section } from './style';

const NotFoundComponent = () => {
    return (
        <Section>
             <Container>
                <Row>
                    <Col xs={12} md={12} lg={12}>
                        <NotFoundImgWrapper>
                            <h3>Lost your way?</h3>
                            <p>Oops! This is awkward. You are looking for something that doesn't actually exist.</p>
                        </NotFoundImgWrapper>   
                    </Col>
                </Row>
            </Container>
            <NotFoundGif/>
        </Section>
    );
}

export default NotFoundComponent;
