import React from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {SliderItem} from './style'
import Loading from "../Loading";
import Card from "../Card/Card";
import Link from "next/link";


const PosterSlider = ({ data , isLoading , mediaType }) => {
    
    const settings = {
        infinite: false,
        slidesToShow: 5.2,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3.2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3.2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3.2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2.2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.2,
                    slidesToScroll: 1,
                }
            }

        ],
    };
    console.log(data)
    return (
        <Slider {...settings}>
            
            {
                isLoading ? <Loading/> :
                data.map((item, index) => {
                    return (
                        <SliderItem key={index} >
                            <Link href={`${item.media_type || mediaType }/${item.id}`}>
                                <a>
                                    <Card cardTitle={item.title || item.name} cardImageURL={item.poster_path} cardRatingScore={item.vote_average} />
                                </a>
                            </Link>
                        </SliderItem>
                    )
                })
            }
            
        </Slider>
    )
}
export default PosterSlider;

