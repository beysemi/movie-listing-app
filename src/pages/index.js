import React from "react";
import useSWR from 'swr'
import { TRENDING_ALL_WEEK, DISCOVER_MOVIE} from "../lib/constans/api";
import axios from '../helpers/fetcher';

import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TrendingSlider from "../components/TrendingSlider/";
import TopRatedSlider from "../components/TopRatedSlider";

const Meta = {
  title: "Home",
  description: "This is the description of the Home page",
  image: "https://www.example.com/image.jpg",
}

const Homepage = ({initialTrendingData,initalTopRatedData}) => {
  return (
    <>
      <Layout title={Meta.title} description={Meta.description} image={Meta.image}>
        <Header />
        <Hero title="Movie App" text="Millions of movies, TV shows and people to discover. Explore now." />
        <TrendingSlider title="Trending" initialData={initialTrendingData}/>
        <TopRatedSlider title="Top Rated" initialData={initalTopRatedData} />
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  const initialTrendingData = await axios.get(TRENDING_ALL_nWEEK);
  const initalTopRatedData = await axios.get(DISCOVER_MOVIE, {
      params: {
        sort_by: "vote_count.desc",
        page: 1,
      }
    });
  return {
    props: {
      initialTrendingData : initialTrendingData,
      initalTopRatedData : initalTopRatedData
    }, 
  }
}

export default Homepage
