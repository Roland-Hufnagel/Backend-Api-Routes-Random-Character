import useSWR from "swr";
const fetcher = (url) => fetch(url).then((r) => r.json());
export default function HomePage() {
  const { data, error, isLoading } = useSWR(`/api/random-character`, fetcher);

  if (error) {
    return <p>an error occured</p>;
  }
  if (isLoading) {
    return <p>is Loading...</p>;
  }
  return (
    <>
      <h1>
        Hi, my name is {data.firstName} {data.lastName}.
      </h1>
      <p>My geohash is: {data.geohash}</p>
      <p>Here is my twitter name: {data.twitterName}</p>
      <p>Refresh the page to get next character...</p>
    </>
  );
}
