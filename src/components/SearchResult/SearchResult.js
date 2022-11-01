import React, { useEffect, useState, useRef } from "react";
import GridView from "../GridView";
import Loading from "../Loading";
import useSWR from "swr";
import useSWRInfinite from "swr/infinite";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "../../helpers/fetcher";
import { SEARCH_MULTI, SEARCH_MOVIE } from "../../lib/constans/api";
import SearchNotFound from "../SearchNotFound";

const SearchResult = ({ searchQuery }) => {
  const [page, setPage] = useState(1);
  const [searchResults, setSearchResult] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const { data, error, mutate, size, isLoading, setSize, isValidating } =
    useSWRInfinite(
      (index) => `${SEARCH_MULTI}/?query=${searchQuery}&page=${page}`,
      axios
    );
  let totalPages = data?.[0].total_pages;
  let totalResult = data?.[0].total_pages;

  useEffect(() => {
    if (data?.[0].results) {
      setSearchResult([...searchResults, ...data?.[0].results]);
    }
    if (totalPages > page) {
      setHasMore(true);
    } else {
      setHasMore(false);
    }
    if (searchQuery == undefined) {
      setSearchResult([]);
    }
  }, [data]);

  useEffect(() => {
    setSearchResult([]);
    setHasMore(true);
    setPage(1);
    if (data?.[0].results) {
      setSearchResult([...data?.[0].results]);
    }
  }, [searchQuery]);

  if (error) return <div>Failed to load</div>;
  if (searchQuery == undefined) return "Arama";
  console.log(data)
  return (
    <>
      {data && totalResult == 0 ? (
        <SearchNotFound />
      ) : (
        <InfiniteScroll
          dataLength={totalPages || 0}
          next={() => {
            totalPages > page ? setPage(page + 1) : {};
          }}
          hasMore={hasMore}
        >
          <GridView data={searchResults} />
        </InfiniteScroll>
      )}
      {!data && !hasMore ? <Loading /> : ""}
    </>
  );
};

export default SearchResult;
