import InfiniteScroll from "react-infinite-scroller";
import { useInfiniteQuery } from "react-query";
import { Species } from "./Species";

const initialUrl = "https://swapi.dev/api/species/";
const fetchUrl = async (url) => {
  const response = await fetch(url);
  return response.json();
};

export function InfiniteSpecies() {
  // TODO: get data for InfiniteScroll via React Query
  const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery(
    "sw-species",
    ({ pageParam = initialUrl}) => fetchUrl(pageParam),
    {
      getNextPageParam: ( lastPage) => lastPage.next || undefined
    }
  )

  if (isLoading) return <h3>Loading species yo...</h3>

  return <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage} >
    {data.pages.map(pageData => 
      pageData.results.map(spec => (
        <Species 
          key={spec.name}
          name={spec.name}
          language={spec.language}
          averageLifespan={spec.averageLifespan}
        />
      )))}
  </InfiniteScroll>
}
