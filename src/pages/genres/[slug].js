import React from "react";

import Layout from "../../components/Layout";
import Header from "../../components/Header";
import { useRouter } from 'next/router'

const Meta = {
  title: "Detail",
  description: "This is the description of the Home page",
  image: "https://www.example.com/image.jpg",
}


const Genres = () => {
  return (
    <>
      <Layout title={Meta.title} description={Meta.description} image={Meta.image}>
        <Header />
      </Layout>
    </>
  )
}

export async function getServerSideProps({res, query}) {
    const genreName = query.slug;
    console.log(genreName)
    // const data = await axios.get(`${mediaType}/${mediaId}`);
    // if(mediaType !== "movie" && mediaType !== "tv" || data == undefined) {
    //   res.statusCode = 404;
    //   return {
    //     props: {error: 404}
    //    }
    // }
  
    return {
      props: {
        
      }, 
    }
  }

export default Genres
