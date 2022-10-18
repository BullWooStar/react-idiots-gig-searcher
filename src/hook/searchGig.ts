import { useQuery } from "react-query";
async function getGig(bandname: any) {
  const response = await fetch(
    `https://api.idiots.band/api/search?keyword=${bandname}`
  );
  return response.json();
}

export function useSearchGig(bandname: any) {
  const fallback = [];
  const { data = fallback, refetch } = useQuery("gigInfo", () =>
    getGig(bandname)
  );
  return { data, refetch };
}
