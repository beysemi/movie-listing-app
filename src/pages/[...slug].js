import React , {useEffect} from 'react';
import { useRouter } from 'next/router'
import Layout from "../components/Layout";
import Header from "../components/Header";
import DetailHero from '../components/DetailHero';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DetailArea from '../components/DetailArea/DetailArea';
import NotFoundComponent from '../components/404'
import axios from '../helpers/fetcher';
import { DETAIL_MOVIE , DETAIL_TV} from "../lib/constans/api";




const DetailPage = ({error , detailData}) => {
  if(error) return <Layout><Header/><NotFoundComponent/></Layout>
  return (
    <Layout>
        <Header/>
        <Container>
          <Row>
            <Col xs={12} md={12} lg={12} className="d-none d-lg-block">
              <DetailHero  HeroImgURL={detailData.backdrop_path} />
            </Col>
            <Col xs={12} md={12} lg={12}>
              <DetailArea data={detailData} />
            </Col>
          </Row>
        </Container>
        
    </Layout>
  )
}

export async function getServerSideProps({res, query}) {
  const mediaType = query.slug[0];
  const mediaId = query.slug[1];

  const data = await axios.get(`${mediaType}/${mediaId}`);
  if(mediaType !== "movie" && mediaType !== "tv" || data == undefined) {
    res.statusCode = 404;
    return {
      props: {error: 404}
     }
  }

  return {
    props: {
      detailData : data,
    }, 
  }
}

export default DetailPage