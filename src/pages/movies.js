import React from "react";
import axios from '../helpers/fetcher';
import { POPULAR_MOVIE, NOW_PLAYING_MOVIE, UPCOMING_MOVIE } from "../lib/constans/api";
import Layout from "../components/Layout";
import Header from "../components/Header";
import PopularMovieSlider from "../components/PopularMovieSlider";
import NowPlayingMovieSlider from "../components/NowPlayingMovieSlider";
import Hero from "../components/Hero";
import UpcomingMovieSlider from "../components/UpcomingMovieSlider";


const Meta = {
  title: "Movies",
  description: "This is the description of the Movie page",
  image: "https://www.example.com/image.jpg",
}

const MoviesPage = ({initialPopularMoviesData,initialNowPlayingMoviesData,initialUpcomingMoviesData}) => {
  return (
    <>
      <Layout title={Meta.title} description={Meta.description} image={Meta.image}>
        <Header />
        <Hero title="Movies" text="" searchbar={false} />
        <PopularMovieSlider title="Popular" initialData={initialPopularMoviesData}/>
        <NowPlayingMovieSlider title="Now Playing" initialData={initialNowPlayingMoviesData}/>
        <UpcomingMovieSlider title="Upcoming" initialData={initialUpcomingMoviesData}/>
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  const initialPopularMoviesData = await axios.get(POPULAR_MOVIE);
  const initialNowPlayingMoviesData = await axios.get(NOW_PLAYING_MOVIE);
  const initialUpcomingMoviesData = await axios.get(UPCOMING_MOVIE);
  return {
    props: {
      initialPopularMoviesData : initialPopularMoviesData,
      initialNowPlayingMoviesData : initialNowPlayingMoviesData,
      initialUpcomingMoviesData : initialUpcomingMoviesData,
    }, 
  }
}

export default MoviesPage
