import React from 'react'
import { Like, VideoTick, Star } from '../Icons';
import {CardContainer, CardHead, CardBody, CardTitle, CardRating ,CardImg} from './style'


const Card = ({ cardTitle, cardImageURL, cardRatingScore }) => {
    return (
        <CardContainer>
            <CardHead>
                <CardImg src={"https://image.tmdb.org/t/p/w500" + cardImageURL} alt={cardTitle}  />
                <CardRating>
                    <Star stroke="#FFAD49" viewBox="0 0 24 24" width="16" height="16" />
                    {cardRatingScore.toFixed(1)}
                </CardRating>
            </CardHead>
            <CardBody>
                <CardTitle>{cardTitle}</CardTitle>
            </CardBody>
        </CardContainer>
    )
}

export default Card;