import React, {useState } from "react"
import axios from '../../helpers/fetcher';
import useSWR from 'swr'
import { POPULAR_MOVIE } from "../../lib/constans/api";
import PosterSlider from "../PosterSlider";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Section, SectionTitle } from './style'


const PopularMovieSlider = ({ title, initialData }) => {
    const [isLoading, setIsLoading] = useState(false);
    const requestParams  = {
        params: {
            region: "US",
        }
      }
    const { data, error } = useSWR([`${POPULAR_MOVIE}`, requestParams] , axios);

    if (error) return <div>failed to load</div>;
    if (!data && !initialData) {
        setIsLoading(true);
    };
    return (
        <Section>
            <Container fluid className="p-0">
                <Row className="m-0">
                    <Col xs={12} md={12} lg={12} className="d-flex justify-content-between align-items-center">
                        <SectionTitle>{title}</SectionTitle>
                    </Col>
                    <Col xs={12} md={12} lg={12} className="p-0">
                        <PosterSlider data={data ? data.results : initialData.results} mediaType="movie" isLoading={isLoading} />
                    </Col>
                </Row>
            </Container>
        </Section>
    );
}

export default PopularMovieSlider;
