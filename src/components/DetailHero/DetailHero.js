import React from 'react';
import {Hero, HeroImage, HeroBody, HeroDetail, HeroBreadcrumb , HeroTitle} from './style'
const DetailHero = ({title,HeroImgURL}) => {
    return (
        <Hero>
                {HeroImgURL && <HeroImage src={`https://www.themoviedb.org/t/p/original/${HeroImgURL}`}/> }
        </Hero>
    );
}

export default DetailHero;
