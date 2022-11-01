import React from 'react'
import Link from 'next/link';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from '../Card'
import {GridContainer} from './style.js'

const GridView = ({data}) => {
    const searchFilter = item => {
       return ((item.media_type == "movie" || "tv") && ( item.poster_path != null || undefined))
    }
  return (
    <GridContainer>
        <Container>
            <Row sm={1} md={2} lg={3} xlg={4}>
                {
                    data.filter(searchFilter).map((item, index) => {
                        return (
                            <Col key={index} xs={12} md={6} lg={4} xlg={3} className="mb-5" >
                                <Link  href={`${item.media_type}/${item.id}`}>
                                    <a>
                                        <Card cardTitle={item.title || item.name} cardImageURL={item.poster_path} cardRatingScore={item.vote_average}/>
                                    </a>
                                </Link>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    </GridContainer>
  )
}

export default GridView