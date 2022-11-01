import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Hero from '../components/Hero'
import SearchResult from '../components/SearchResult';

const Meta = {
    title: "Search",
    description: "This is the description of the Search page",
    image: "https://www.example.com/image.jpg",
  }

const SearchPage = () => {
    const router = useRouter();
    const searchQuery = router.query.q;
    return (
        <Layout title={Meta.title} description={Meta.description} image={Meta.image}>
            <Header />
            <Hero title="Movie App" text="Lorem Impsum" />
            <SearchResult searchQuery={searchQuery}/>
        </Layout>
    )
}

export default SearchPage