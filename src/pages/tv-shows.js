import React from "react";
import axios from '../helpers/fetcher';
import { POPULAR_TV,AIRING_TODAY_TV,TOP_RATED_TV } from "../lib/constans/api";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Header from "../components/Header";
import PopularTvShowsSlider from "../components/PopularTvShowsSlider";
import AiringTodayTvShowsSlider from "../components/AiringTodayTvShowsSlider";
import TopRatedTvShowsSlider from "../components/TopRatedTvShowsSlider";


const Meta = {
  title: "TV Shows",
  description: "This is the description of the Tv Shows page",
  image: "https://www.example.com/image.jpg",
}

const TvShowsPage = ({initialPopularTvShowsData,initialAiringTodayTvData,initialLastestTvData}) => {
  return (
    <>
      <Layout title={Meta.title} description={Meta.description} image={Meta.image}>
        <Header />
        <Hero title="TV Shows" text="" searchbar={false} />
        <PopularTvShowsSlider title="Popular" initialData={initialPopularTvShowsData}  />
        <AiringTodayTvShowsSlider title="Airing Today" initialData={initialAiringTodayTvData}  />
        <TopRatedTvShowsSlider title="Top Rated" initialData={initialLastestTvData}  />
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  const initialPopularTvShowsData = await axios.get(POPULAR_TV);
  const initialAiringTodayTvData = await axios.get(AIRING_TODAY_TV);
  const initialLastestTvData = await axios.get(TOP_RATED_TV);
  return {
    props: {
      initialPopularTvShowsData : initialPopularTvShowsData,
      initialAiringTodayTvData : initialAiringTodayTvData,
      initialLastestTvData : initialLastestTvData,
    }, 
  }
}

export default TvShowsPage
