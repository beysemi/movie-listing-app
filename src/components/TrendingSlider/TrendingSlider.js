import React, {useState } from "react"
import axios from '../../helpers/fetcher';
import useSWR from 'swr'
import { TRENDING,MEDIA_TYPES,TIME_WINDOW} from "../../lib/constans/api";
import PosterSlider from "../PosterSlider";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Section , SectionTitle, SectionHead} from './style'
import BSDropdown from 'react-bootstrap/Dropdown';
import BSDropdownButton from 'react-bootstrap/DropdownButton';
import Skeleton from 'react-loading-skeleton'
import Loading from "../Loading";


const TrendingSlider = ({title,initialData}) => {
  const [mediaType, setMediaType] = useState("all");
  const [timeWindow, setTimeWindow] = useState("week");
  const [isLoading, setIsLoading] = useState(false);
  const [timeSelection, setTimeSelection] = useState("Weekly");
  const { data, error } = useSWR(`${TRENDING}/${mediaType}/${timeWindow}`, axios);

  if (error) return <div>failed to load</div>;
  if (!initialData && !data){
    isLoading(true)
  }

  return (
    <Section>
      <Container fluid className="p-0">
          <Row className="m-0">
              <Col xs={12} md={12} lg={12}>
                  <SectionHead>
                    <SectionTitle>{title || <Skeleton/>}</SectionTitle>
                    <BSDropdownButton id="dropdown-basic-button" title={timeWindow == "week" ? "Weekly" : "Daily"}>
                      <BSDropdown.Item onClick={()=>{setTimeWindow("week")}}>Weekly</BSDropdown.Item>
                      <BSDropdown.Item onClick={()=>{setTimeWindow("day")}}>Daily</BSDropdown.Item>
                    </BSDropdownButton>
                  </SectionHead>
              </Col>
              <Col xs={12} md={12} lg={12} className="p-0">
                  <PosterSlider data={data ? data.results : initialData.results}  isLoading={isLoading} />
              </Col>
          </Row>
      </Container>
    </Section>
  )
}

export default TrendingSlider
