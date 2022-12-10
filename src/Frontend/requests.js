const APIKEY = "dc4a86911275397345a45711cc673d67";
const requests = {
  fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
  fetchNetflixOriginals: `discover/tv?api_key=${APIKEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${APIKEY}&with_genres-10749`,
  fetchPopular: `/movie/movie?api_key=${APIKEY}&language=en-US&page=1`,
  fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
};
export default requests;
