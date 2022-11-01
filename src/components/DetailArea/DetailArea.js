import React from 'react';
import { MovieSection, MoviePoster, MovieDetail, MovieTitle, MovieText, MovieRank, MovieDetailBox } from './style'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


import { Star, Play } from '../../components/Icons';

const DetailArea = ({ data }) => {
    console.log(data)
    return (
        <MovieSection>
            <Row>
                <Col xs={12} md={12} lg={6} className='d-flex'>
                    <MoviePoster className='mx-auto' src={`https://www.themoviedb.org/t/p/w500${data.poster_path}`} />
                </Col>
                <Col xs={12} md={12} lg={6} className='d-flex'>
                    <MovieDetail>
                        <MovieTitle>{data.title || data.name}</MovieTitle>
                        <MovieText>{data.overview}</MovieText>
                        <MovieRank>
                            <Star stroke="#FFAD49" viewBox="0 0 24 24" width="16" height="16" />
                            {data.vote_average.toFixed(1)}
                        </MovieRank>
                        <MovieDetailBox>
                            <h6>Release Date:</h6>
                            <span>{data.release_date || data.first_air_date}</span>
                        </MovieDetailBox>
                        {
                            data.runtime && <MovieDetailBox>
                                <h6>Run time</h6>
                                <span>{data.runtime} min</span>
                            </MovieDetailBox>
                        }
                        {
                            data.seasons && <MovieDetailBox>
                                <h6>Seasons</h6>
                                <span>{data.seasons.length}</span>
                            </MovieDetailBox>
                        }
                        <MovieDetailBox>
                            <h6>Genres</h6>
                            <ul>
                                {data.genres.map((item, index) => {
                                    return (
                                        <li key={index}>{item.name}</li>
                                    )
                                })}

                            </ul>
                        </MovieDetailBox>
                    </MovieDetail>
                </Col>
            </Row>
        </MovieSection>
    );
}

export default DetailArea;
