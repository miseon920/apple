import axios from "axios";

const base_url = "https://openapi.naver.com/v1/search/";
const search = "애플워치";
const id = "mgWQmy5kaDVH_4c_Ku3r";
const key = "Y6CF9ir5B6";
// get /v1/search/shop
// HOST: openapi.naver.com
// Content-Type: plain/text
// X-Naver-Client-Id: mgWQmy5kaDVH_4c_Ku3r
// X-Naver-Client-Secret: Y6CF9ir5B6

const instance = axios.create({
  baseURL: base_url,
  //   params: {
  //     language: "ko-KR",
  //   },
  params: {
    query: search,
    display: 20,
  },

  headers: {
    "Content-Type": "plain/text",
    "X-Naver-Client-Id": id,
    "X-Naver-Client-Secret": key,
  },
});
// const category = {
//   NowPlaying: "movie/now_playing",
//   Netflix: "/discover/tv?with_networks=213",
//   Trending: "/trending/movie/week",
//   Rated: "/movie/top_rated",
//   Movies: "/discover/movie",
//   MoviesGenre: "/genre/movie/list",
//   // MoviesWithGenre: "/discover/movie?with_genres=" + genres + "&page=" + page,
// };

export { instance };
