import React, { useEffect, useState } from "react"
import axios from '../../helpers/fetcher';
import useSWR from 'swr'
import {DISCOVER} from "../../lib/constans/api";
import PosterSlider from "../PosterSlider";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BSDropdown from 'react-bootstrap/Dropdown';
import BSDropdownButton from 'react-bootstrap/DropdownButton';
import {Section , SectionTitle} from './style'
import Loading from "../Loading";


const  TopRatedSlider = ({title,initialData}) => {

  const [isLoading,setIsLoading] = useState(false);
  const [mediaType, setMediaType] = useState('movie')
  const requestParams  = {
    params: {
      language: "en-US",
      sort_by: "vote_count.desc",
      include_adult: false,
      include_video: false,
      page: 1,
      with_watch_monetization_types: "flatrate"
    }
  }
  const { data, error } = useSWR([`${DISCOVER}/${mediaType}`, requestParams ], axios);

  if (error) return <div>failed to load</div>;
  if (!data && !initialData){
    setIsLoading(true);
  };
  return (
    <Section>
      <Container fluid className="p-0">
          <Row className="m-0">
              <Col xs={12} md={12} lg={12} className="d-flex justify-content-between align-items-center">
                  <SectionTitle>{title}</SectionTitle>
                  <BSDropdownButton id="dropdown-basic-button" title={mediaType == "movie" ? "Movies" : "Tv Shows"}>
                      <BSDropdown.Item onClick={()=>{setMediaType("movie")}}>Movie</BSDropdown.Item>
                      <BSDropdown.Item onClick={()=>{setMediaType("tv")}}>Tv Shows</BSDropdown.Item>
                  </BSDropdownButton>
              </Col>
              <Col xs={12} md={12} lg={12} className="p-0">
                  <PosterSlider data={data ? data.results : initialData.results} mediaType={mediaType} isLoading={isLoading}/>
              </Col>
          </Row>
      </Container>
    </Section>
  )
}

export default TopRatedSlider